import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '70vh', width: '700px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start'}}>
      {props.children}
    </div>
  );
};

export default Scroll;