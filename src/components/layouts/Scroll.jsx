import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{border:'1px solid black',height:'1500px',overflowY:'scroll'}}>
      {props.children}
    </div>
  );
}

export default Scroll;
