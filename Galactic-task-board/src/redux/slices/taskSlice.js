import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    createTask: (state, action) => {
      const newTask = action.payload; // Expecting task details from the payload
      state.data.push(newTask);
    },
    deleteTask: (state, action) => {
      const taskId = action.payload; // Expecting task id from the payload
      state.data = state.data.filter((task) => task.id !== taskId);
    },
    updateTask: (state, action) => {
      const { id, updatedTask } = action.payload; // Expecting task id and updated task details from the payload
      const taskIndex = state.data.findIndex((task) => task.id === id);
      if (taskIndex >= 0) {
        state.data[taskIndex] = { ...state.data[taskIndex], ...updatedTask };
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { createTask, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
