import { getAuth } from "firebase/auth";
import "./App.css";
import { AddNewTransaction } from "./components/AddNewTransaction";
import { BalanceView } from "./components/BalanceView";
import { Header } from "./components/Header";
import { History } from "./components/History";
import { Container, Grid, Stack } from "@mui/material";
import { getFirestore } from "firebase/firestore";
import {
  FirestoreProvider,
  DatabaseProvider,
  AuthProvider,
  useFirebaseApp,
} from "reactfire";
import { getDatabase } from "firebase/database";

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());

  const app = useFirebaseApp();
  const database = getDatabase(app);
  const auth = getAuth(app);

  return (
    <AuthProvider sdk={auth}>
      <DatabaseProvider sdk={database}>
        <FirestoreProvider sdk={firestoreInstance}>
          <Container
            maxWidth="sm"
            sx={{ width: 600, height: 1500, backgroundColor: "primary.dark" }}
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
        </FirestoreProvider>
      </DatabaseProvider>
    </AuthProvider>
  );
}

export default App;
