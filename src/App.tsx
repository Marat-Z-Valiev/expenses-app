import { getAuth } from "firebase/auth";
import "./App.css";
import { AddNewTransaction } from "./components/AddNewTransaction";
import { Balance } from "./components/Balance";
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
import { DataProvider } from "./context/DataContext";
import { IncomeExpenses } from "./components/IncomeExpenses";

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());

  const app = useFirebaseApp();
  const database = getDatabase(app);
  const auth = getAuth(app);

  return (
    <AuthProvider sdk={auth}>
      <DatabaseProvider sdk={database}>
        <FirestoreProvider sdk={firestoreInstance}>
          <DataProvider>
            <Container
              maxWidth="lg"
              sx={{ width: 600, height: 2500, backgroundColor: "primary.dark" }}
            >
              <Stack spacing={2}>
                <Header />
                <Balance />
                <IncomeExpenses />
                <History />
                <AddNewTransaction />
              </Stack>
            </Container>
          </DataProvider>
        </FirestoreProvider>
      </DatabaseProvider>
    </AuthProvider>
  );
}

export default App;
