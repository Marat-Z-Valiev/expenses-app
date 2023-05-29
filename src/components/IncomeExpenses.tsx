import {
  Box,
  Card,
  CardContent,
  Typography,
  styled,
} from "@mui/material";
import { TransactionData, useDataProvider } from "../context/DataContext";

const Container = styled(Box)`
  display: flex;
  & > div {
    flex: 1;
    padding: 10px;
  }
`;

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
    <Container>
      <Card>
        <CardContent>
          <Typography>Income</Typography>
          <Typography style={{ color: "green" }}>+${income}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography>Expense</Typography>
          <Typography style={{ color: "red" }}>-${expense}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};
