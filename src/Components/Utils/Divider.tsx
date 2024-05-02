import React from 'react';

interface DividerProps {
  type:'horizontal' | 'vertical'
  style?: React.CSSProperties | undefined
  role?: React.AriaRole | undefined
}

function Divider({type,style, role}:DividerProps) {
  const styleDivider: React.CSSProperties = type === 'horizontal' ? {
    borderBottom:'1px',
    borderStyle:'solid',
    color:'lightslategrey',
    width:'100%',
  } : {
    borderLeft:'1px',
    color:'lightslategrey',
    height:'100%',
    borderStyle:'solid',
  }
  return (
    <div role={role} style={{...styleDivider,...style}}/>
  );

}

export default Divider;