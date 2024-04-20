import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailModal: false,
  formModal: {
    isOpen: false,
    type: "create",
  },
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setDetailModal: (state, action) => {
      state.detailModal = action.payload;
    },
    setFormModal: (state, action) => {
      state.formModal.isOpen = action.payload.isOpen;
      state.formModal.type = action.payload.type;
    }
  },
});

export const { setDetailModal, setFormModal } = modal.actions;
export default modal.reducer;
