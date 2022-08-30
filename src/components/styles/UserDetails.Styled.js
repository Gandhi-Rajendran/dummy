import { styled, Stack, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledDetailStack = styled(Stack)`
  background-color: #e0e0e0;
  padding: 10px;
`;

export const StyledDetailLink = styled(Link)`
  text-decoration: none;
  font-size: 13px;
  color: blue;
  font-family: Arial, Helvetica, sans-serif; /*For Align Item Purpose*/
  padding-right: 6px;
`;

export const StyledTypo = styled(Typography)`
  font-size: 13px;
`;

//details Components
export const StyledDetBox = styled(Box)`
  margin: 3% auto;
  width: 50%;
  border: 1px solid lightgrey;
  border-radius: 3px;
`;
export const StyledHeader = styled(Stack)`
  margin: 0;
  background-color: #eeeeee;
  border-bottom: 1px solid lightgrey;
  font-size: 13px;
  padding: 12px;
`;

export const StyledTypography = styled(Typography)`
  font-size: 13px;
  padding: 12px;
`;
