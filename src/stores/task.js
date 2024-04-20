import { createSlice } from "@reduxjs/toolkit";
import initialData from "../initialData";

const initialState = {
  tasks: initialData,
  selectedTask: {},
};

const tasks = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [action.payload, ...state.tasks];
    },
    editTask: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, ...action.payload };
        }
        return task;
      });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    changeStatus: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, status: action.payload.status };
        }
        return task;
      });
    },
  },
});

export const { addTask, editTask, deleteTask, setSelectedTask, changeStatus } =
  tasks.actions;
export default tasks.reducer;
