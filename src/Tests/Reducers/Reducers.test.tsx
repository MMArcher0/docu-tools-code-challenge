import {Task} from "../../Entities/Tasks/Task";
import TasksReducer, {removeTask, setTask, setTaskToEdit} from "../../Reducers/TasksReducer";

test('should handle a Task being added',() => {
  const previusState = {
    tasks: {} as Record<string, Task>,
    taskToEditId: null
  }

  expect(TasksReducer(previusState, setTask({
    id:'1',title:'Test',date:'2024-12-25',status:'pending', description:'Test'
  }))).toEqual({
    tasks:{
      '1':{id:'1',title:'Test',date:'2024-12-25',status:'pending', description:'Test'}
    },
    taskToEditId:null
  })
})

test('should handle a Task being edited',() => {
  const previusState = {
    tasks: {
      '1':{id:'1',title:'Test',date:'2024-12-25',status:'pending',description:'Test'}
    } as Record<string, Task>,
    taskToEditId: null
  }

  expect(TasksReducer(previusState, setTask({
    id:'1',title:'Altered test',date:'2024-12-25',status:'pending',description:'Altered test'
  }))).toEqual({
    tasks:{
      '1':{id:'1',title:'Altered test',date:'2024-12-25',status:'pending',description:'Altered test'}
    },
    taskToEditId:null
  })
})

test('should handle a Task being removed',() => {
  const previusState = {
    tasks: {
      '1':{id:'1',title:'Test',date:'2024-12-25',status:'pending',description:'Test'}
    } as Record<string, Task>,
    taskToEditId: null
  }

  expect(TasksReducer(previusState, removeTask('1'))).toEqual({
    tasks:{},
    taskToEditId:null
  })
})


test('should handle a task being seted do edit',() => {
  const previusState = {
    tasks: {
      '1':{id:'1',title:'Test',date:'2024-12-25',status:'pending',description:'Test'}
    } as Record<string, Task>,
    taskToEditId: null
  }

  expect(TasksReducer(previusState, setTaskToEdit('1'))).toEqual({
    tasks:{
      '1':{id:'1',title:'Test',date:'2024-12-25',status:'pending',description:'Test'}
    },
    taskToEditId:'1'
  })
})