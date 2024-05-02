import {combineReducers, configureStore} from '@reduxjs/toolkit'
import TasksReducer from "../Reducers/TasksReducer";

export default configureStore({
  reducer: {
    tasks: TasksReducer
  },
  devTools: true
})

//Configuration bellow is used for test purposes

const rootReducer = combineReducers({
  tasks: TasksReducer
})

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']