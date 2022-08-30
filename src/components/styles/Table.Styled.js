import { Link } from "react-router-dom";

import { styled, TableCell, Button, Box } from "@mui/material";

export const StyledNavLink = styled(Link)`
  text-decoration: none;
`;

export const StyledTableCell = styled(TableCell)`
  font-weight: ${(props) => (props.head ? "bold" : "")};
  background-color: ${(props) => (props.head ? "lightgrey" : "")};
  padding: 10px;
`;

export const StyledTableButton = styled(Button)`
  font-size: 10px;
  padding: 3px 8px;
  margin-right: 10px;
`;
export const AddUserButton = styled(Button)`
  font-size: 10px;
  margin-top: 10px;
  padding: 6px 12px;
`;

export const StyledNetBox = styled(Box)`
  width: 50%;
  margin: 3% auto;
`;
