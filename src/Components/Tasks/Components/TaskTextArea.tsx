import React from 'react';
import '../../../Styles/Tasks/Tasks.css'
import {Typography} from "../../Utils/Typography";
import {TextArea} from "../../Utils/TextArea";

interface TaskInputProps {
  title:string,
  placeHolder:string,
  multline?: boolean
  rows?: number | undefined
  cols?: number | undefined
  divStyle?: React.CSSProperties | undefined
  value?: string | number | readonly string[] | undefined
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined
}

function TaskInput({title,placeHolder,onChange,value,rows,cols,divStyle}: TaskInputProps) {
  return (
    <div className="TaskInputDiv" style={divStyle}>
      <Typography style={{fontWeight:'bold', alignSelf: 'flex-start'}}>{title}</Typography>
      <TextArea
        rows={rows}
        cols={cols}
        placeholder={placeHolder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default TaskInput;