import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useDataProvider } from "../context/DataContext";

export const AddNewTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useDataProvider();

  const onSubmit = () => {
    const newTransaction = {
      text,
      amount,
    };

    addTransaction(newTransaction);

    setText("");
    setAmount("");
  };

  return (
    <Stack spacing={2}>
      <Stack>
        <p>Text</p>
        <TextField
          id="outlined-basic"
          label="Enter text..."
          value={text}
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
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
          onChange={(e) => setAmount(e.target.value)}
        />
      </Stack>
      <Button variant="contained" onClick={onSubmit}>
        Add transaction
      </Button>
    </Stack>
  );
};
