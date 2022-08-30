import { Navigate, useParams } from "react-router";
import { useSelector } from "react-redux";

import Details from "./Details";

import {
  StyledDetailStack,
  StyledDetailLink,
  StyledTypo,
} from "../styles/UserDetails.Styled";
import { Stack } from "@mui/material";

const UserDetails = () => {
  const { id } = useParams();
  const userLogin = useSelector((state) => state.userLogin.userLogin);
  const users = useSelector((state) => state.users);

  if (!userLogin) return <Navigate to="/" />;

  const filteredUser = users.filter((user) => user.id === id);

  return (
    <Stack>
      <StyledDetailStack
        position="sticky"
        elevation={0}
        direction="row"
        alignItems="center"
      >
        <StyledDetailLink to="/home/users">Users</StyledDetailLink>
        <StyledTypo variant="body2" component="p">
          / {id}
        </StyledTypo>
      </StyledDetailStack>
      {filteredUser.map((user) => (
        <Details user={user} key={user.id} />
      ))}
    </Stack>
  );
};

export default UserDetails;
