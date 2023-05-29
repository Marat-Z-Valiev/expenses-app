import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useFirestore } from "reactfire";
import { collection, doc, setDoc } from "firebase/firestore";

export const AddNewTransaction = () => {
  const [{ name, amount }, setTransaction] = useState({
    name: "",
    amount: "",
  });

  const transactionsCollectionRef = collection(useFirestore(), "transactions");

  const document = doc(transactionsCollectionRef);

  const addData = () => {
    try {
      setDoc(document, {
        name: name,
        amount: amount,
      });
      setTransaction({ name: "", amount: "" });
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  return (
    <Stack spacing={2}>
      <Stack>
        <p>Text</p>
        <TextField
          id="outlined-basic"
          label="Enter text..."
          value={name}
          variant="outlined"
          onChange={(e) =>
            setTransaction({ name: e.currentTarget.value, amount })
          }
        />
      </Stack>
      <Stack>
        <p>Text</p>
        <TextField
          id="outlined-basic"
          label="Enter amount..."
          type="number"
          value={amount}
          variant="outlined"
          onChange={(e) =>
            setTransaction({ name, amount: e.currentTarget.value })
          }
        />
      </Stack>
      <Button variant="contained" onClick={addData}>
        Add transaction
      </Button>
    </Stack>
  );
};
