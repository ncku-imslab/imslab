import React from 'react';
import PropTypes from 'prop-types';

const Block = React.forwardRef((props, ref) => (
  <div className="block" id={props.id} ref={ref}>
    { props.title && [
      <hr key='sep1'/>,
      <h3 className="title" key='title'>{props.title}</h3>,
      <hr key='sep2'/>] }
    <div>{props.children}</div>
  </div>
));

Block.displayName = 'Block';
Block.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Block;
