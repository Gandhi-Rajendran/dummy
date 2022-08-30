import { styled, Button } from "@mui/material";

export const StyledForm = styled("form")`
  padding: 10px;
`;

export const StyledSelect = styled("select")`
  padding: 3px 12px;
  border-radius: 3px;
  margin-bottom: 3px;
  width: 100%;
  &:focus {
    outline: none;
    background-color: white;
    border: 1px solid #448aff;
    box-shadow: 0px 0px 3px 1px #448aff;
  }
`;

export const StyledTextArea = styled("textarea")`
  background-color: #e8eaf6;
  border: 1px solid ${(props) => (props.error ? "red" : "lightgrey")};
  margin-bottom: 3px;
  border-radius: 3px;
  &:focus {
    outline: none;
    background-color: white;
    border: 1px solid #448aff;
    box-shadow: 0px 0px 3px 1px #448aff;
  }
`;

export const StyledButton = styled(Button)`
  font-size: 10px;
  padding: 3px 7px;
  margin: 10px 0%;
  margin-right: 10px;
  color: ${(props) => (props.cancel ? "#616161" : "")};
  border: 1px solid #616161;
  &:hover {
    background-color: ${(props) => (props.cancel ? "#616161" : "")};
    color: ${(props) => (props.cancel ? "white" : "")};
    border: ${(props) => (props.cancel ? "none" : "")};
  }
  &:focus {
    border: 1px solid #448aff;
    box-shadow: 0px 0px 3px 1px #448aff;
  }
`;
