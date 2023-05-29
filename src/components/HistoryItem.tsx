import { Button } from "@mui/material";
import { useDataProvider } from "../context/DataContext";

type HistoryItemProps = {
  id: string;
  itemText: string;
  itemAmount: string;
};

export const HistoryItem = ({ id, itemText, itemAmount }: HistoryItemProps) => {
  const { deleteTransaction } = useDataProvider();

  const onSubmit = () => {
    deleteTransaction(id);
  };
  return (
    <>
      <p>{itemText}</p>
      <p>{itemAmount}</p>
      <Button onClick={onSubmit}>Delete</Button>
    </>
  );
};
