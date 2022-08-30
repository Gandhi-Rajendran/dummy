import { Link } from "react-router-dom";
import { styled, Typography } from "@mui/material";

export const StyledLink = styled(Link)`
  font-size: ${(props) => (props.active ? "13px" : "12px")};
  color: ${(props) => (props.active ? "white" : "lightgray")};
  text-decoration: none;
  padding: 8px;
  &:hover {
    cursor: pointer;
    color: white;
  }
`;
export const StyledDiv = styled(Typography)`
  color: lightgray;
  padding: 8px;
  &:hover {
    cursor: pointer;
    color: white;
  }
`;
