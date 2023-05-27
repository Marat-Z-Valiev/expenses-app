type HistoryItemProps = {
  itemText: string;
  itemAmount: string;
};

export const HistoryItem = ({ itemText, itemAmount }: HistoryItemProps) => {
  return (
    <>
      <p>{itemText}</p>
      <p>{itemAmount}</p>
    </>
  );
};
