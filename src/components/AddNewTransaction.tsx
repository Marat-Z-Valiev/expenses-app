import { Button, Stack, TextField, Typography, styled } from "@mui/material";
import { useState } from "react";
import { useDataProvider } from "../context/DataContext";

const NewTransactionText = styled(Typography)`
  font-size: 25px;
  margin-bottom: 20px;
`;

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
      <Typography variant="h5">Add New Transaction</Typography>
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
        <p>Amount (negative - expense, positive - income)</p>
        <TextField
          id="outlined-basic"
          label="Enter amount..."
          type="number"
          value={amount}
          variant="outlined"
          onChange={(e) => setAmount(e.target.value)}
        />
      </Stack>
      <Button
        variant="contained"
        disabled={!amount || !text}
        onClick={onSubmit}
      >
        Add transaction
      </Button>
    </Stack>
  );
};
