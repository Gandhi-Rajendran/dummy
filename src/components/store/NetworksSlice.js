import { createSlice } from "@reduxjs/toolkit";

const networks = [
  {
    id: 1,
    name: "airtel",
    description: "CONNECTING MORE PEOPLE",
  },
];

const NetworksSlice = createSlice({
  name: "networkData",
  initialState: networks,
  reducers: {
    networkAdd(state, action) {
      state.push(action.payload);
    },
    networkUpdate(state, action) {
      const { id, name, description } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.description = description;
      }
    },
    networkDelete(state, action) {
      const id = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
      console.log("Deleted");
    },
  },
});

export const networksActions = NetworksSlice.actions;

export default NetworksSlice;
