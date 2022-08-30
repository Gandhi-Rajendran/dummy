import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { Typography, Stack, Divider, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { formActions } from "../store/Store";
import { networksActions } from "../store/NetworksSlice";

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
  StyledTextArea,
  StyledButton,
} from "../styles/Form.Styled";

const NetworkForm = ({ createForm, editForm, id }) => {
  const networks = useSelector((state) => state.networks);
  const editNetwork = networks.filter((network) => network.id === id);

  const schema = yup.object({
    name: yup.string().required("Required Name!"),
    description: yup.string().uppercase().required("Required Description!"),
  });

  const dispatch = useDispatch();
  const networkId = uuid().slice(0, 8);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  useEffect(() => {
    if (editForm) {
      reset({
        name: editNetwork[0].name,
        description: editNetwork[0].description,
      });
    }
  }, []);

  const closeFormHandler = () => {
    dispatch(formActions.closeNetworkForm());
  };

  const onSubmit = (data) => {
    if (createForm) {
      dispatch(
        networksActions.networkAdd({
          ...data,
          id: networkId,
        })
      );
    }
    if (editForm) {
      dispatch(
        networksActions.networkUpdate({
          id,
          name: data.name,
          description: data.description,
        })
      );
    }
    closeFormHandler();
  };

  // Box Style
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
            Create New Network
          </Typography>
        )}
        {editForm && (
          <Typography variant="body1" component="h6">
            Edit Network
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
          <StyledLabel>Name</StyledLabel>
          <StyledInput
            placeholder="Name"
            {...register("name")}
            error={errors.name}
          />
          {errors.name && (
            <StyledErr variant="caption" component="p">
              {errors.name?.message}
            </StyledErr>
          )}
        </StyledStack>
        <StyledStack>
          <StyledLabel>Description</StyledLabel>
          <StyledTextArea
            rows="3"
            {...register("description")}
            error={errors.description}
          />
          {errors.description && (
            <StyledErr variant="caption" component="p">
              {errors.description?.message}
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

export default NetworkForm;
