import { styled, Typography } from "@mui/material";

export const Header = () => {
  const Header = styled(Typography)`
    margin: 10px 0;
    color: blue;
    font-size: 36px;
    text-transform: uppercase;
  `;
  return <Header>Expense Tracker</Header>;
};
