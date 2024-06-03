import {createSlice} from "@reduxjs/toolkit";
import {Task} from "../Entities/Tasks/Task";
import {Dispatch} from "react";
import {TaskFromDunnyJson} from "../Entities/Tasks/TaskFromDunnyJson";

const TasksReducer = createSlice({
  name: 'tasks',
  initialState: {
    tasks: {},
    taskToEditId: null,
    isLoading: false,
    isLoaded: false,
    error: null
  } as { tasks: Record<string, Task>, taskToEditId: null | string, isLoading: boolean, isLoaded: boolean, error: null | string },
  reducers: {
    removeTask: (state, action) => {
      delete state.tasks[action.payload]
    },
    setTask: (state, action) => {
      state.tasks = {...state.tasks, [action.payload.id]: action.payload}
    },
    setTaskToEdit: (state, action) => {
      state.taskToEditId = action.payload
    },
    setIsLoaded: (state, action) => {
      state.isLoaded = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setErrorMessage: (state, action) => {
      state.error = action.payload
    }
  }
})

//Fetch tasks from dummyJSON

export const fetchTasks = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(setIsLoading(true))
    const date = new Date().toISOString().split('T')[0]
    const res = await fetch('https://dummyjson.com/todos/random/5')
    const tasksList = await res.json() as TaskFromDunnyJson[]
    tasksList.forEach((task) => dispatch(setTask({id: task.id, title: task.todo, description: task.todo, status: task.completed ? "completed" : "pending", date: date})))
    dispatch(setIsLoaded(true))

  } catch (e) {

    dispatch(setErrorMessage('Error ocurred while loading tasks'))

  } finally {

    dispatch(setIsLoading(false))

  }
}

export const {removeTask, setTask, setTaskToEdit, setIsLoaded, setIsLoading, setErrorMessage} = TasksReducer.actions
export default TasksReducer.reducer