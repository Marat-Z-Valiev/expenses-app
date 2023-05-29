import { Box, styled, Typography } from "@mui/material";
import { TransactionData, useDataProvider } from "../context/DataContext";

const BalanceText = styled(Typography)`
  font-size: 25px;
  margin-bottom: 20px;
`;

export const Balance = () => {
  const { transactions } = useDataProvider();

  const totalAmount =
    transactions.data &&
    transactions.data.reduce((acc: any, transaction: TransactionData) => {
      const amount = parseFloat(transaction.amount);

      if (!isNaN(amount)) {
        return acc + amount;
      }

      return acc;
    }, 0);

  return (
    <Box>
      <BalanceText>Your balance {`$${totalAmount ?? "0"}`}</BalanceText>
    </Box>
  );
};
