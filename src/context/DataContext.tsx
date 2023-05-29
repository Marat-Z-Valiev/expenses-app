import {
  collection,
  query,
  orderBy,
  doc,
  serverTimestamp,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { createContext, useContext } from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";

export type TransactionData = {
  text: string;
  amount: string;
};

interface State {
  transactions: null | undefined | any;
  addTransaction: (transactionData: TransactionData) => Promise<void>;
  deleteTransaction: (transactionId: string) => Promise<void>;
}

export const DataContext = createContext<State | undefined>(undefined);

export const DataProvider = ({ children }: any) => {
  const transactionsCollectionRef = collection(
    useFirestore(),
    import.meta.env.VITE_FIREBASE_COLLECTION_NAME
  );

  const transactionsQuery = query(
    transactionsCollectionRef,
    orderBy("createdAt", "desc")
  );

  const data = useFirestoreCollectionData(transactionsQuery, {
    idField: "id",
  });

  console.log("data ", data);

  const addTransaction = (itemData: TransactionData) => {
    return setDoc(doc(transactionsCollectionRef), {
      ...itemData,
      createdAt: serverTimestamp(),
    });
  };

  const deleteTransaction = (documentId: string) => {
    return deleteDoc(doc(transactionsCollectionRef, documentId));
  };

  let state = {
    transactions: data,
    addTransaction,
    deleteTransaction,
  };

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

export default DataContext;
export const useDataProvider = () =>
  useContext<State | undefined>(DataContext)!;
