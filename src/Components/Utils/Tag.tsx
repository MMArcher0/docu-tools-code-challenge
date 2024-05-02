import React from 'react';

interface TagProps {
  name: string,
  color?: string
  role?: React.AriaRole | undefined
}

function Tag({name,color,role}: TagProps) {
  return (
    <p role={role} style={{borderRadius:'20px', backgroundColor:color, paddingRight:'8px', paddingLeft:'8px'}}>{name}</p>
  );
}

export default Tag;