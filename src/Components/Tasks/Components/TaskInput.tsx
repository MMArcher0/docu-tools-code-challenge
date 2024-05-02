import React from 'react';
import '../../../Styles/Tasks/Tasks.css'
import {Typography} from "../../Utils/Typography";
import {Input} from "../../Utils/Input";

interface TaskInputProps {
  title:string,
  placeHolder:string,
  type?: React.HTMLInputTypeAttribute | undefined
  style?: React.CSSProperties | undefined
  divStyle?: React.CSSProperties | undefined
  value?: string | number | readonly string[] | undefined
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

function TaskInput({title,placeHolder,onChange,type,style,divStyle,value}: TaskInputProps) {
  return (
    <div className="TaskInputDiv" style={divStyle}>
      <Typography style={{fontWeight:'bold', alignSelf: 'flex-start'}}>{title}</Typography>
      <Input
        value={value}
        onChange={onChange}
        style={style}
        type={type}
        placeholder={placeHolder}
      />
    </div>
  );
}

export default TaskInput;