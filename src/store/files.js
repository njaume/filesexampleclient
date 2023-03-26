import { createSlice } from "@reduxjs/toolkit";
import ApiService from "../api";
const server = ApiService.getInstance();
// Slice
const slice = createSlice({
  name: "files",
  initialState: {
    isLoading: false,
    files: null,
  },
  reducers: {
    setFiles: (state, action) => {
      state.files = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload.isLoading;
    },
  },
});
export default slice.reducer;
export const selectFiles = (state) => state.files;

// Actions
const { setFiles, setLoading } = slice.actions;
export const getFiles = () => async (dispatch) => {
  try {
    dispatch(setLoading({ isLoading: true }));
    const res = await server.getFiles();
    dispatch(setFiles(res));
    dispatch(setLoading({ isLoading: false }));
  } catch (e) {
    dispatch(setLoading({ isLoading: false }));
    return console.error(e.message);
  }
};
