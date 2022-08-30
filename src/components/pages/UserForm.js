import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Stack, Divider, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuid } from "uuid";

import { formActions } from "../store/Store";
import { userSliceActions } from "../store/UsersSlice";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  StyledStack,
  StyledInput,
  StyledLabel,
  StyledErr,
} from "../styles/Login.Styled";
import {
  StyledForm,
  StyledSelect,
  StyledTextArea,
  StyledButton,
} from "../styles/Form.Styled";

const UserForm = ({ createForm, editForm, id }) => {
  const userId = uuid().slice(0, 8);
  const dispatch = useDispatch();

  //editfilter
  const users = useSelector((state) => state.users);
  const editUser = users.filter((user) => user.id === id);

  const schema = yup.object({
    login: yup.string().required("Login Required!"),
    password: yup.string().required("Password Required!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Don't Match")
      .required("Confirm Password is Required!"),
    data: yup
      .string()
      .required("Data Required!")
      .test("jsonValidator", "Enter Valid Json!", (val) => IsJson(val)),
  });

  function IsJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  const closeFormHandler = () => {
    dispatch(formActions.closeUserForm());
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      login: "",
      role: "Admin",
      status: "Logout",
      password: "",
      confirmPassword: "",
      data: "",
    },
  });

  useEffect(() => {
    if (editForm) {
      reset({
        login: editUser[0].login,
        role: editUser[0].role,
        status: editUser[0].status,
        password: editUser[0].password,
        confirmPassword: editUser[0].confirmPassword,
        data: editUser[0].data,
      });
    }
  }, []);
  const onSubmit = (values) => {
    if (createForm) {
      dispatch(
        userSliceActions.usersAdd({
          ...values,
          id: userId,
        })
      );
    } else {
      dispatch(
        userSliceActions.userUpdate({
          id: id,
          login: values.login,
          role: values.role,
          status: values.status,
          password: values.password,
          confirmPassword: values.confirmPassword,
          data: values.data,
        })
      );
    }

    closeFormHandler();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 1,
  };
  return (
    <Box sx={style}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        padding="15px 12px"
      >
        {createForm && (
          <Typography variant="body1" component="h6">
            Create New User
          </Typography>
        )}
        {editForm && (
          <Typography variant="body1" component="h6">
            Edit User
          </Typography>
        )}
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={closeFormHandler}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </Stack>
      <Divider />
      <StyledForm autoComplete="off">
        <StyledStack>
          <StyledLabel>Login</StyledLabel>
          <StyledInput
            type="text"
            placeholder="Login"
            {...register("login")}
            error={errors.login}
          />
          {errors.login && (
            <StyledErr variant="caption" component="p">
              {errors.login.message}
            </StyledErr>
          )}
        </StyledStack>
        <StyledStack direction="row">
          <Stack width={1} mr={1}>
            <StyledLabel>Role</StyledLabel>
            <StyledSelect {...register("role")}>
              <option value="Admin">Admin</option>
              <option value="Client">Client</option>
            </StyledSelect>
          </Stack>
          <Stack width={1}>
            <StyledLabel>Status</StyledLabel>
            <StyledSelect {...register("status")}>
              <option value="Active">Active</option>
              <option value="Logout">Logout</option>
              <option value="Disabled">Disabled</option>
            </StyledSelect>
          </Stack>
        </StyledStack>
        <StyledStack direction="row" justifyContent="space-between">
          <Stack mr={1} width={1}>
            <StyledLabel>Password</StyledLabel>
            <StyledInput
              type="password"
              placeholder="Password"
              {...register("password")}
              error={errors.password}
            />
            {errors.password && (
              <StyledErr variant="caption" component="p">
                {errors.password.message}
              </StyledErr>
            )}
          </Stack>
          <Stack width={1}>
            <StyledLabel>Confirm-Password</StyledLabel>
            <StyledInput
              type="password"
              placeholder="Confirm-Password"
              {...register("confirmPassword")}
              error={errors.confirmPassword}
            />
            {errors.confirmPassword && (
              <StyledErr variant="caption" component="p">
                {errors.confirmPassword.message}
              </StyledErr>
            )}
          </Stack>
        </StyledStack>
        <StyledStack>
          <StyledLabel>Data (json)</StyledLabel>
          <StyledTextArea rows="3" {...register("data")} error={errors.data} />
          {errors?.data && (
            <StyledErr variant="caption" component="p">
              {errors?.data.message}
            </StyledErr>
          )}
        </StyledStack>
        <Divider />
      </StyledForm>
      <Box align="right">
        <StyledButton onClick={closeFormHandler} variant="outlined" cancel={1}>
          Cancel
        </StyledButton>
        <StyledButton
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          color="success"
        >
          Save
        </StyledButton>
      </Box>
    </Box>
  );
};

export default UserForm;
