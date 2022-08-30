import { configureStore, createSlice } from "@reduxjs/toolkit";
import NetworksSlice from "./NetworksSlice";
import UsersSlice from "./UsersSlice";

// Login Authentication
const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: {
    userLogin: false,
  },
  reducers: {
    loggedIn(state) {
      state.userLogin = true;
    },
    loggedOut(state) {
      state.userLogin = false;
    },
  },
});

// userForm
const userFormSlice = createSlice({
  name: "userForm",
  initialState: {
    userForm: false,
    networkForm: false,
  },
  reducers: {
    openUserForm(state) {
      state.userForm = true;
    },
    closeUserForm(state) {
      state.userForm = false;
    },
    openNetworkForm(state) {
      state.networkForm = true;
    },
    closeNetworkForm(state) {
      state.networkForm = false;
    },
  },
});

const idSlice = createSlice({
  name: "id",
  initialState: { idCount: 1 },
  reducers: {
    increment(state) {
      state.idCount++;
    },
  },
});

export const userLoginActions = userLoginSlice.actions;
export const formActions = userFormSlice.actions;
export const idActions = idSlice.actions;

const Store = configureStore({
  reducer: {
    userLogin: userLoginSlice.reducer,
    form: userFormSlice.reducer,
    users: UsersSlice.reducer,
    networks: NetworksSlice.reducer,
    id: idSlice.reducer,
  },
});

export default Store;
