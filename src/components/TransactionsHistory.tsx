import {
  Box,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { Transaction } from "./Transaction";
import { useDataProvider } from "../context/DataContext";

export const History = () => {
  const { transactions } = useDataProvider();

  if (transactions.status === "loading") {
    return (
      <Box sx={{ display: "flex", justifyItems: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container disableGutters>
      <Typography variant="h5">Transaction History</Typography>
      <Stack>
        {transactions.data.map((item: any) => (
          <Transaction
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
