import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";

import { networksActions } from "../store/NetworksSlice";
import { formActions } from "../store/Store";

import ModalBackdrop from "./ModalBackdrop";
import {
  StyledTableCell,
  StyledTableButton,
  AddUserButton,
  StyledNetBox,
} from "../styles/Table.Styled";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Box,
} from "@mui/material";

const Networks = () => {
  const userLogin = useSelector((state) => state.userLogin.userLogin);

  const networks = useSelector((state) => state.networks);
  const networkForm = useSelector((state) => state.form.networkForm);
  const dispatch = useDispatch();

  const [createForm, setCreateForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [netId, setNetId] = useState(0);

  //Login Authentication Check
  if (!userLogin) return <Navigate to="/" />;

  const createFormHandler = () => {
    setCreateForm(true);
    setEditForm(false);
    dispatch(formActions.openNetworkForm());
  };
  const networkEditHandler = (id) => {
    setEditForm(true);
    setCreateForm(false);
    dispatch(formActions.openNetworkForm());
    setNetId(id);
  };
  const networkDeleteHandler = (id) => {
    dispatch(networksActions.networkDelete(id));
  };

  return (
    <StyledNetBox>
      <TableContainer sx={{ maxHeight: "440px" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell head={1}>NetWork</StyledTableCell>
              <StyledTableCell head={1}>Description</StyledTableCell>
              <StyledTableCell head={1} sx={{ width: "25%" }}>
                Actions
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {networks.map((network) => (
              <TableRow key={network.id}>
                <StyledTableCell>{network.name}</StyledTableCell>
                <StyledTableCell>{network.description}</StyledTableCell>
                <StyledTableCell>
                  <StyledTableButton
                    variant="contained"
                    size="small"
                    onClick={() => networkEditHandler(network.id)}
                  >
                    Edit
                  </StyledTableButton>
                  <StyledTableButton
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => networkDeleteHandler(network.id)}
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
          Add New Network
        </AddUserButton>
      </Box>
      {networkForm && (
        <ModalBackdrop createForm={createForm} editForm={editForm} id={netId} />
      )}
    </StyledNetBox>
  );
};

export default Networks;
