import { ListItem, ListItemIcon, ListItemText, styled } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDataProvider } from "../context/DataContext";

type TransactionProps = {
  id: string;
  itemText: string;
  itemAmount: string;
};

const List = styled(ListItem)`
  display: flex;
  margintop: 10px;
  border: 1px solid #f6f6f6;
`;

export const Transaction = ({ id, itemText, itemAmount }: TransactionProps) => {
  const { deleteTransaction } = useDataProvider();

  const onClickTransaction = () => {
    deleteTransaction(id);
  };

  const color = Number(itemAmount) >= 0 ? "Green" : "Red";
  return (
    <>
      <List style={{ background: `${color}`, color: "#fff" }}>
        <ListItemIcon>
          <DeleteIcon
            onClick={onClickTransaction}
            style={{ cursor: "pointer" }}
          />
        </ListItemIcon>
        <ListItemText primary={itemText} />
        <ListItemText primary={itemAmount} />
      </List>
    </>
  );
};
