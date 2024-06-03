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
import Divider from "../../Utils/Divider";

interface ListTaskItemProps {
  task: Task,
  index: number
}

function ListTaskItem({task, index}: ListTaskItemProps) {

  const dispatch = useDispatch()

  return (
    <div key={index} className="ListItemTaskMainDiv">
      <div className="ListItemContainer">
        <div className="ListItemTaskHeaderDiv">
          <Typography style={{wordBreak: 'break-all'}} variant={'title'}>{task.title}</Typography>
          <div className="ListItemTaskDiv">
            <TaskTags tagStaus={task.status}/>
            <Typography style={{fontWeight:'bold',fontSize:'0.8ren'}}>{moment(task.date).format('L')}</Typography>
          </div>
        </div>
        <Typography variant={'body2'}>{task.description}</Typography>
        <Divider type={"horizontal"}/>
        <div className="ListItemTaskActions">
          <div>
            <MdDelete
              role={'removeTask'}
              className="ListItemButton"
              size={30}
              color={'red'}
              onClick={() => dispatch(removeTask(task.id))}
            />
          </div>
          <div>
            {task.status !== 'completed' && <FaCheck
                role={'completeTask'}
                className="ListItemButton"
                color={"#dcdce4"}
                size={30}
                onClick={() => dispatch(setTask({...task, status: 'completed'}))}
            />}
            {task.status !== 'completed' && <MdEdit
                role={'editTask'}
                className="ListItemButton"
                color={"#dcdce4"}
                size={30}
                onClick={() => dispatch(setTaskToEdit(task.id))}
            />}
            {task.status === 'pending' && <FaCaretRight
                role={'startTask'}
                className="ListItemButton"
                color={"#dcdce4"}
                size={30}
                onClick={() => dispatch(setTask({...task, status: 'inProgress'}))}
            />}
            {task.status === 'inProgress' && <FaPause
                role={'pauseTask'}
                className="ListItemButton"
                color={"#dcdce4"}
                size={30}
                onClick={() => dispatch(setTask({...task, status: 'pending'}))}
            />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListTaskItem;