import React from 'react';
import Tasks from "./Components/Tasks";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <>
      <Tasks/>
      <ToastContainer
        position="bottom-center"
      />
    </>
  );
}

export default App;
