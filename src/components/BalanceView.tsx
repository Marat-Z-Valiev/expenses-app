type BalanceViewProps = {
  balance: number;
};

export const BalanceView = ({ balance }: BalanceViewProps) => {
  return (
    <>
      <p>{`$${balance}`}</p>
    </>
  );
};
