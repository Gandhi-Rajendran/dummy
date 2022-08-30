import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Stack, Box } from "@mui/material";

import { formActions } from "../store/Store";
import ModalBackdrop from "./ModalBackdrop";

import {
  StyledDetBox,
  StyledTypography,
  StyledHeader,
} from "../styles/UserDetails.Styled";
import { StyledBtn } from "../styles/Login.Styled";

const Details = ({ user }) => {
  const [editForm, setEditForm] = useState(false);
  const userForm = useSelector((state) => state.form.userForm);

  const dispatch = useDispatch();

  const editFormHandler = () => {
    setEditForm(true);
    dispatch(formActions.openUserForm());
  };

  return (
    <StyledDetBox>
      <StyledHeader variant="body1" component="p">
        User
      </StyledHeader>
      <StyledTypography>Login : {user.login}</StyledTypography>
      <Stack direction="row">
        <StyledTypography mr={"25%"}>Role : {user.role}</StyledTypography>
        <StyledTypography>Status : {user.status}</StyledTypography>
      </Stack>
      <StyledTypography>Data (json) :</StyledTypography>
      <StyledTypography>{user.data}</StyledTypography>
      <Box align="right" m={1}>
        <StyledBtn onClick={editFormHandler} variant="contained">
          Edit
        </StyledBtn>
      </Box>
      {userForm && <ModalBackdrop editForm={editForm} id={user.id} />}
    </StyledDetBox>
  );
};

export default Details;
