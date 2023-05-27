import { Button, Stack, TextField } from "@mui/material";

export const AddNewTransaction = () => {
  return (
    <Stack spacing={2}>
      <Stack>
        <p>Text</p>
        <TextField
          id="outlined-basic"
          label="Enter text..."
          variant="outlined"
        />
      </Stack>
      <Stack>
        <p>Text</p>
        <TextField
          id="outlined-basic"
          label="Enter amount..."
          variant="outlined"
        />
      </Stack>
      <Button variant="contained">Add transaction</Button>
    </Stack>
  );
};
