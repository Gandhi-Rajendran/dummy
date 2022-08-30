import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/pages/Header";
import Login from "./components/pages/Login";
import Users from "./components/pages/Users";
import Networks from "./components/pages/Networks";
import UserDetails from "./components/pages/UserDetails";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: true,
      },
    },
  },
});

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home/users" element={<Users />} />
          <Route path="/home/networks" element={<Networks />} />
          <Route path="/home/user/:id" element={<UserDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
