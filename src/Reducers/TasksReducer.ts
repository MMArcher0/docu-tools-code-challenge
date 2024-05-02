import { createSlice} from "@reduxjs/toolkit";
import {Task} from "../Entities/Tasks/Task";

const TasksReducer = createSlice({
  name: 'tasks',
  initialState: {
    tasks: {},
    taskToEditId: null,
  } as {tasks: Record<string,Task>, taskToEditId: null | string },
  reducers: {
    removeTask: (state, action) => {
      delete state.tasks[action.payload]
    },
    setTask: (state, action) => {
      state.tasks = {...state.tasks, [action.payload.id]:action.payload}
    },
    setTaskToEdit: (state, action) => {
      state.taskToEditId = action.payload
    }
  }
})

export const { removeTask, setTask, setTaskToEdit} = TasksReducer.actions
export default TasksReducer.reducer