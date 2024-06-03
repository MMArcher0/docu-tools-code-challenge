import React from 'react';

interface DividerProps {
  type:'horizontal' | 'vertical'
  style?: React.CSSProperties | undefined
  role?: React.AriaRole | undefined
}

function Divider({type,style, role}:DividerProps) {
  const styleDivider: React.CSSProperties = type === 'horizontal' ? {
    border:'1px solid',
    color:'#dcdce4',
    margin:'12px 0px',
    width:'100%',
  } : {
    color:'#dcdce4',
    height:'100%',
    margin:'0px 12px',
    border:'1px solid',
  }
  return (
    <div role={role} style={{...styleDivider,...style}}/>
  );

}

export default Divider;