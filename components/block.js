import React from 'react';

const Block = React.forwardRef((props, ref) => (
  <div className="block" id={props.id} ref={ref}>
    { props.title && [
        <hr key='sep1'/>, 
        <h3 className="title" key='title'>{props.title}</h3>, 
        <hr key='sep2'/> ] }
    <div>{props.children}</div>
  </div>
));

export default Block;
