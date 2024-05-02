import React from 'react';
import Tag from "../../Utils/Tag";

interface TaskTagsProps{
  tagStaus: 'pending' | 'inProgress' | 'completed'
}
function TaskTags({tagStaus}: TaskTagsProps) {

  switch (tagStaus) {
    case "completed":
      return <Tag name={'Completed'} color={'#90ee90'}/>
    case "inProgress":
      return <Tag name={'In progress'} color={'#add8e6'}/>
    case "pending":
      return <Tag name={'Pending'} color={'#FF7F7F'}/>
  }
}

export default TaskTags;