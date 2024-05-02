import React, {useEffect, useState} from 'react';
import TaskInput from "./TaskInput";
import TaskTextArea from "./TaskTextArea";
import {FaPlus} from "react-icons/fa6";
import {FaSave} from "react-icons/fa";
import {Task} from "../../../Entities/Tasks/Task";
import {MdCancel} from "react-icons/md";
import useVerifyFields from "../../../Hooks/useVerifyFields";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {setTask, setTaskToEdit} from "../../../Reducers/TasksReducer";
import {v4 as uuidv4} from 'uuid'
import {Typography} from "../../Utils/Typography";
import {Button} from "../../Utils/Button";

function AddTask() {

  const taskToEdit = useSelector((state: any) => state.tasks.tasks[state.tasks.taskToEditId])
  const dispatch = useDispatch()
  const {isEmpty, minCharacters} = useVerifyFields()
  const [newTask, setNewTask] = useState<Omit<Task, 'id'>>({title: '', date: '', description: '', status: 'pending'})

  const handleAddTask = () => {

    //Verify fields and use toastify to notify user

    if (isEmpty(newTask.title) || minCharacters(newTask.title, 3)) {
      toast('Title to short', {type: 'error'})
      return
    }

    if (isEmpty(newTask.date)) {
      toast('A task need a date', {type: 'error'})
      return
    }

    if (isEmpty(newTask.description) || minCharacters(newTask.description, 3)) {
      toast('Description to short', {type: 'error'})
      return
    }

    //Check if is adding a task or edting an exinting one

    dispatch(setTask({...newTask, id: (taskToEdit?.id && taskToEdit.status !== 'completed') ? taskToEdit.id : uuidv4()}))
    dispatch(setTaskToEdit(null))
    setNewTask({title: '', date: '', description: '', status: 'pending'})

  }

  const handleCancelEditTask = () => {
    dispatch(setTaskToEdit(null))
    setNewTask({title: '', date: '', description: '', status: 'pending'})
  }

  //Update fields when a task is selected to be edted

  useEffect(() => {
    if (taskToEdit && taskToEdit.status !== 'completed') {
      setNewTask(taskToEdit)
    } else {
      setNewTask({title: '', date: '', description: '', status: 'pending'})
    }
  }, [taskToEdit])

  return (
    <>
      <Typography variant={'h2'}>Manage your Tasks</Typography>
      <div className="TaskTitleDateDiv">
        <TaskInput
          style={{width: '90%'}}
          divStyle={{width: '100%'}}
          title={'Title'}
          placeHolder={'Task title'}
          onChange={(e) => setNewTask({...newTask, title: e.target.value})}
          value={newTask.title}
        />
        <TaskInput
          style={{width: '100%'}}
          title={'Date'}
          type={'date'}
          placeHolder={'Task date'}
          onChange={(e) => setNewTask({...newTask, date: e.target.value})}
          value={newTask.date}
        />
      </div>
      <TaskTextArea
        divStyle={{width: '90%'}}
        title={'Description'}
        placeHolder={'Task description'}
        onChange={(e) => setNewTask({...newTask, description: e.target.value})}
        value={newTask.description}
      />
      <div className="TaskFlexRow">
        <Button
          onClick={handleAddTask}
        >
          {taskToEdit && taskToEdit.status !== 'completed' ? 'Save changes' : 'Add task'}
          {taskToEdit && taskToEdit.status !== 'completed' ? <FaSave size={23}/> : <FaPlus size={23}/>}
        </Button>
        {taskToEdit && taskToEdit.status !== 'completed' && <Button
            onClick={handleCancelEditTask}
        >
            Cancel
            <MdCancel size={23}/>
        </Button>}
      </div>
    </>
  );
}

export default AddTask;