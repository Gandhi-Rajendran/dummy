import { styled, Container, Typography, Stack, Button } from "@mui/material";

export const StyledContainer = styled(Container)`
  margin-top: 20px;
`;

export const StyledStack = styled(Stack)`
  margin-bottom: 6px;
`;

export const StyledLabel = styled("label")`
  margin-bottom: 5px;
  font-size: 14px;
`;
export const StyledInput = styled("input")`
  background-color: #e8eaf6;
  padding: 3px 12px;
  border-radius: 3px;
  margin-bottom: 3px;
  width: 100%;
  border: 1px solid ${(props) => (props.error ? "red" : "lightgrey")};
  &:focus {
    outline: none;
    background-color: white;
    border: 1px solid #448aff;
    box-shadow: 0px 0px 3px 1px #448aff;
  }
`;
export const StyledErr = styled(Typography)`
  padding-left: 6px;
  color: #d32f2f;
`;

export const StyledBtn = styled(Button)`
  color: "lightgrey";
  font-size: 10px;
  padding: 3px 6px;
  background-color: blue;
  &:focus {
    border: 1px solid #448aff;
    box-shadow: 0px 0px 3px 1px #448aff;
  }
`;
