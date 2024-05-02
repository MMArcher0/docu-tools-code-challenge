import React from 'react';
import {FaCaretRight} from "react-icons/fa";
import {MdDelete, MdEdit} from "react-icons/md";
import {Task} from "../../../Entities/Tasks/Task";
import {FaPause, FaCheck} from "react-icons/fa6";
import TaskTags from "./TaskTags";
import moment from "moment";
import {useDispatch} from "react-redux";
import {setTask, removeTask, setTaskToEdit} from "../../../Reducers/TasksReducer";
import {Typography} from "../../Utils/Typography";

interface ListTaskItemProps {
  task: Task,
  index: number
}

function ListTaskItem({task, index}: ListTaskItemProps) {

  const dispatch = useDispatch()

  return (
    <div key={index} className="ListItemTaskMainDiv">
      <div className="ListItemTaskHeaderDiv">
        <Typography variant={'body'}>{task.title}</Typography>
        <div className="ListItemTaskDiv">
          <Typography>{moment(task.date).format('L')}</Typography>
          <TaskTags tagStaus={task.status}/>
          {task.status === 'pending' && <FaCaretRight
              role={'startTask'}
              style={{cursor: 'pointer'}}
              size={30}
              onClick={() => dispatch(setTask({...task, status: 'inProgress'}))}
          />}
          {task.status === 'inProgress' && <FaPause
              role={'pauseTask'}
              style={{cursor: 'pointer'}}
              size={30}
              onClick={() => dispatch(setTask({...task, status: 'pending'}))}
          />}
          {task.status !== 'completed' && <FaCheck
              role={'completeTask'}
              style={{cursor: 'pointer'}}
              size={30}
              onClick={() => dispatch(setTask({...task, status: 'completed'}))}
          />}
          {task.status !== 'completed' && <MdEdit
              role={'editTask'}
              style={{cursor: 'pointer'}}
              size={25}
              onClick={() => dispatch(setTaskToEdit(task.id))}
          />}
          <MdDelete
            role={'removeTask'}
            style={{cursor: 'pointer'}}
            size={25}
            color={'red'}
            onClick={() => dispatch(removeTask(task.id))}
          />
        </div>
      </div>
      <Typography variant={'body2'}>{task.description}</Typography>
    </div>
  );
}

export default ListTaskItem;