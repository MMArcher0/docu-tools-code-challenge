import React, {useEffect} from 'react';
import '../../../Styles/Tasks/TaskListItem.css'
import ListTaskItem from "./ListTaskItem";
import {useDispatch, useSelector} from "react-redux";
import {Task} from "../../../Entities/Tasks/Task";
import {Typography} from "../../Utils/Typography";
import {fetchTasks} from "../../../Reducers/TasksReducer";
import {toast} from "react-toastify";

function ListTasks() {

  const tasksMap = useSelector((state: any) => state.tasks.tasks) as Map<string, Task>
  const tasks = Object.values(tasksMap)
  const dispatch = useDispatch<any>();
  const errorMessage = useSelector((state:any)=> state.tasks.error)

  useEffect(() => {
    const getTasks = async () => {
      await dispatch(fetchTasks())
    }

    getTasks()

  }, [dispatch])

  useEffect(()=>{
    if(errorMessage){
      toast(errorMessage, {type:'error'})
    }
  },[errorMessage])

  return (
    <>
      <Typography variant={'h3'}>Your tasks</Typography>
      <div className="ListTasksDiv">
        {tasks.map((task: Task, i: number) => <ListTaskItem key={i} task={task} index={i}/>
        )}
        {tasks.length <= 0 && <Typography variant={'h3'}>You not have any task at the moment</Typography>}
      </div>
    </>
  );
}

export default ListTasks;