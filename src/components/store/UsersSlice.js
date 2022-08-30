import { createSlice } from "@reduxjs/toolkit";

const users = [
  {
    id: "1",
    login: "gandhi",
    role: "SuperAdmin",
    status: "Active",
    password: "123",
    confirmPassword: "123",
    data: "1",
  },
];

const UsersSlice = createSlice({
  name: "userData",
  initialState: users,
  reducers: {
    usersAdd(state, action) {
      state.push(action.payload);
    },
    userUpdate(state, action) {
      const { id, login, role, status, password, confirmPassword, data } =
        action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.login = login;
        existingUser.role = role;
        existingUser.status = status;
        existingUser.password = password;
        existingUser.confirmPassword = confirmPassword;
        existingUser.data = data;
      }
    },
    userDelete(state, action) {
      const id = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const userSliceActions = UsersSlice.actions;

export default UsersSlice;
