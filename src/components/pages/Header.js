import { AppBar, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { userLoginActions } from "../store/Store";

import { StyledLink, StyledDiv } from "../styles/Header.Styled";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin.userLogin);
  const dispatch = useDispatch();

  //Use for Navigation Users and Networks Tab
  const location = useLocation();
  const path = location.pathname.split("/").pop();

  const logoutHandler = () => {
    dispatch(userLoginActions.loggedOut());
  };

  return (
    <div className="header">
      <AppBar
        sx={{ backgroundColor: "#424242" }}
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h6" pr={3}>
            Aequalis
          </Typography>
          {userLogin && (
            <>
              <StyledLink to="/home/users" active={path === "users" ? 1 : 0}>
                Users
              </StyledLink>
              <StyledLink
                to="/home/networks"
                active={path === "networks" ? 1 : 0}
              >
                Networks
              </StyledLink>
              <StyledDiv
                variant="caption"
                component="div"
                onClick={logoutHandler}
                sx={{ marginLeft: "auto" }}
              >
                Log Out
              </StyledDiv>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
