import { Container, Stack } from "@mui/material";
import { HistoryItem } from "./HistoryItem";

const historyItems = [
  {
    itemText: "Cash",
    itemAmount: "+500",
  },
  { itemText: "Book", itemAmount: "-40" },
];

export const History = () => {
  return (
    <Container>
      <h3>History</h3>
      <Stack>
        {historyItems.map((item, index) => (
          <HistoryItem
            key={index}
            itemText={item.itemText}
            itemAmount={item.itemAmount}
          />
        ))}
      </Stack>
    </Container>
  );
};
