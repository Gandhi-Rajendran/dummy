import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { userLoginActions } from "../store/Store";

import { Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import {
  StyledContainer,
  StyledLabel,
  StyledInput,
  StyledErr,
  StyledStack,
  StyledBtn,
} from "../styles/Login.Styled";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const Login = () => {
  const [alert, setAlert] = useState(false);

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = yup.object({
    loginId: yup.string().required("Login ID Required!"),
    password: yup.string().required("Password Required!"),
  });

  schema.isValid(users);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      loginId: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    if (
      !users.some(
        (user) => user.login === data.loginId && user.password === data.password
      )
    ) {
      setAlert(true);
      return;
    }
    setAlert(false);
    dispatch(userLoginActions.loggedIn());
    navigate("/home/users", { replace: true });
  };




  
  return (
    <StyledContainer maxWidth="xs">
      {alert && (
        <Alert
          severity="error"
          sx={{ mb: 1 }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setAlert(false)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Login ID or Password is incorrect!
        </Alert>
      )}
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <StyledStack>
          <StyledLabel>Login</StyledLabel>
          <StyledInput
            type="text"
            placeholder="Login ID"
            {...register("loginId")}
            error={errors.loginId}
          />
          {errors.loginId && (
            <StyledErr variant="caption" component="p">
              {errors.loginId?.message}
            </StyledErr>
          )}
        </StyledStack>
        <StyledStack>
          <StyledLabel>Password</StyledLabel>
          <StyledInput
            type="password"
            placeholder="Enter Password"
            {...register("password")}
            error={errors.password}
          />
          {errors.password && (
            <StyledErr variant="caption" component="p">
              {errors.password?.message}
            </StyledErr>
          )}
        </StyledStack>
        <StyledBtn variant="contained" type="submit">
          Log In
        </StyledBtn>
      </form>
    </StyledContainer>
  );
};

export default Login;
