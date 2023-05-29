import { TransactionData, useDataProvider } from "../context/DataContext";

export const Balance = () => {
  const { transactions } = useDataProvider();

  const totalAmount =
    transactions.data &&
    transactions.data.reduce((acc: any, transaction: TransactionData) => {
      const amount = parseFloat(transaction.amount);

      if (!isNaN(amount)) {
        return acc + amount;
      }

      return acc;
    }, 0);

  return (
    <>
      <p>Your balance {`$${totalAmount ?? "0"}`}</p>
    </>
  );
};
