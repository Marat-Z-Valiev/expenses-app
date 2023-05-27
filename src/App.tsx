import "./App.css";
import { AddNewTransaction } from "./components/AddNewTransaction";
import { BalanceView } from "./components/BalanceView";
import { Header } from "./components/Header";
import { History } from "./components/History";
import { Container, Grid, Stack } from "@mui/material";

function App() {
  return (
    <Container
      maxWidth="sm"
      sx={{ width: 600, height: 1000, backgroundColor: "primary.dark" }}
    >
      <Stack spacing={2}>
        <Header />
        <BalanceView balance={100} />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Stack>
              <p>INCOME</p>
              <p>$500.00</p>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack>
              <p>EXPENSE</p>
              <p>$240.00</p>
            </Stack>
          </Grid>
        </Grid>
        <History />
        <AddNewTransaction />
      </Stack>
    </Container>
  );
}

export default App;
