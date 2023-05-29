import { Grid, Stack } from "@mui/material";
import { TransactionData, useDataProvider } from "../context/DataContext";

export const IncomeExpenses = () => {
  const { transactions } = useDataProvider();

  const amounts =
    transactions.data &&
    transactions.data.map((transaction: TransactionData) =>
      Number(transaction.amount)
    );

  const income =
    amounts &&
    amounts
      .filter((item: number) => item > 0)
      .reduce((acc: any, item: number) => (acc += item), 0);

  const expense =
    amounts &&
    amounts
      .filter((item: number) => item < 0)
      .reduce((acc: any, item: number) => (acc += item), 0) * -1;

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Stack>
          <p>INCOME</p>
          <p>{`${income ?? "0"}`}</p>
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <Stack>
          <p>EXPENSE</p>
          <p>{`${expense ?? "0"}`}</p>
        </Stack>
      </Grid>
    </Grid>
  );
};
