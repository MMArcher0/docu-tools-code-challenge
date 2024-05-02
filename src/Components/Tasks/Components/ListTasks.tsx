import React from 'react';
import '../../../Styles/Tasks/TaskListItem.css'
import ListTaskItem from "./ListTaskItem";
import {useSelector} from "react-redux";
import {Task} from "../../../Entities/Tasks/Task";
import {Typography} from "../../Utils/Typography";


function ListTasks() {

  const tasksMap = useSelector((state:any)=> state.tasks.tasks) as Map<string,Task>
  const tasks = Object.values(tasksMap)

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