import React from "react";
import "../../Styles/Tasks/Tasks.css";
import Divider from "../Utils/Divider";
import AddTask from "./Components/AddTask";
import ListTasks from "./Components/ListTasks";

function Tasks() {
  return (
    <div className="MainDiv">
      <div className="TasksContainer">
        <AddTask />
        <Divider type={"horizontal"} style={{ width: "100%" }} />
        <ListTasks />
      </div>
    </div>
  );
}

export default Tasks;
