import { Box, CircularProgress, Container, Stack } from "@mui/material";
import { HistoryItem } from "./HistoryItem";
import { TransactionData, useDataProvider } from "../context/DataContext";

export const History = () => {
  const { transactions } = useDataProvider();

  const totalAmount =
    transactions.data &&
    transactions.data.reduce((acc: any, transaction: TransactionData) => {
      const amount = parseFloat(transaction.amount); // Convert amount to a number

      // Check if the amount is a valid number
      if (!isNaN(amount)) {
        return acc + amount;
      }

      return acc; // Ignore invalid amounts (NaN)
    }, 0);

  console.log("totalAmount ", totalAmount);

  if (transactions.status === "loading") {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container>
      <h3>History</h3>
      <Stack>
        {transactions.data.map((item: any) => (
          <HistoryItem
            key={item.id}
            id={item.id}
            itemText={item.text}
            itemAmount={item.amount}
          />
        ))}
      </Stack>
    </Container>
  );
};
