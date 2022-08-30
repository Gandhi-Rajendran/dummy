import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";

import { formActions } from "../store/Store";
import { userSliceActions } from "../store/UsersSlice";
import ModalBackdrop from "./ModalBackdrop";

import {
  StyledNavLink,
  StyledTableCell,
  StyledTableButton,
  AddUserButton,
} from "../styles/Table.Styled";
import {
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Box,
} from "@mui/material";

const Users = () => {
  const userLogin = useSelector((state) => state.userLogin.userLogin);
  const userForm = useSelector((state) => state.form.userForm);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [createForm, setCreateForm] = useState(false);

  if (!userLogin) return <Navigate to="/" />;

  const createFormHandler = () => {
    setCreateForm(true);
    dispatch(formActions.openUserForm());
    dispatch(formActions.closeNetworkForm());
  };

  const deleteUserHandler = (id) => {
    dispatch(userSliceActions.userDelete(id));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 3 }}>
      <TableContainer sx={{ maxHeight: "440px" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell head={1}>Login</StyledTableCell>
              <StyledTableCell head={1}>Role</StyledTableCell>
              <StyledTableCell head={1}>Status</StyledTableCell>
              <StyledTableCell head={1} sx={{ width: "25%" }}>
                Data
              </StyledTableCell>
              <StyledTableCell head={1} sx={{ width: "22%" }}>
                Actions
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <StyledTableCell>{user.login}</StyledTableCell>
                <StyledTableCell>{user.role}</StyledTableCell>
                <StyledTableCell>{user.status}</StyledTableCell>
                <StyledTableCell>{user.data}</StyledTableCell>
                <StyledTableCell>
                  <StyledNavLink to={`/home/user/${user.id}`}>
                    <StyledTableButton variant="contained" size="small">
                      Details
                    </StyledTableButton>
                  </StyledNavLink>
                  <StyledTableButton
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => deleteUserHandler(user.id)}
                  >
                    Delete
                  </StyledTableButton>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box align="right">
        <AddUserButton
          variant="contained"
          size="small"
          color="success"
          onClick={createFormHandler}
        >
          Add New User
        </AddUserButton>
      </Box>
      {userForm && <ModalBackdrop createForm={createForm} />}
    </Container>
  );
};

export default Users;
