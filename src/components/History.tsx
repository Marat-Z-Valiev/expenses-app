import { Container, Stack } from "@mui/material";
import { HistoryItem } from "./HistoryItem";
import { collection, orderBy, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";

export const History = () => {
  const transactionsCollection = collection(useFirestore(), "transactions");

  const transactionsQuery = query(
    transactionsCollection,
    orderBy("name", "asc")
  );

  const { status, data: transactions = [] } = useFirestoreCollectionData(
    transactionsQuery,
    {
      idField: "id",
    }
  );

  console.log("status ", status, transactions);

  if (status === "loading") {
    return <span>loading...</span>;
  }

  return (
    <Container>
      <h3>History</h3>
      <Stack>
        {transactions.map((item) => (
          <HistoryItem
            key={item.id}
            id={item.id}
            itemText={item.name}
            itemAmount={item.amount}
          />
        ))}
      </Stack>
    </Container>
  );
};
