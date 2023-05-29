import { getAuth } from "firebase/auth";
// import "./App.css";
import { AddNewTransaction } from "./components/AddNewTransaction";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { History } from "./components/TransactionsHistory";
import { Box, Container, Stack, Typography, styled } from "@mui/material";
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

  const Component = styled(Box)`
  background: #FFF;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  width: 800px;
}
`;

  return (
    <AuthProvider sdk={auth}>
      <DatabaseProvider sdk={database}>
        <FirestoreProvider sdk={firestoreInstance}>
          <DataProvider>
            <Component>
              <Box>
                <Stack spacing={2}>
                  <Header />
                  <Balance />
                  <IncomeExpenses />
                  <History />
                  <AddNewTransaction />
                </Stack>
              </Box>
            </Component>
          </DataProvider>
        </FirestoreProvider>
      </DatabaseProvider>
    </AuthProvider>
  );
}

export default App;
