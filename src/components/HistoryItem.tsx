import { Button } from "@mui/material";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { useFirestore } from "reactfire";

type HistoryItemProps = {
  id: string;
  itemText: string;
  itemAmount: string;
};

export const HistoryItem = ({ id, itemText, itemAmount }: HistoryItemProps) => {
  const transactionsCollectionRef = collection(useFirestore(), "transactions");

  const document = doc(transactionsCollectionRef, id);

  const deleteItem = async () => {
    try {
      await deleteDoc(document);
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };
  return (
    <>
      <p>{itemText}</p>
      <p>{itemAmount}</p>
      <Button onClick={deleteItem}>Delete</Button>
    </>
  );
};
