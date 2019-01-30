import React from 'react';
import PropTypes from 'prop-types';

/**
 * List component
 */
export default class List extends React.Component {
  /**
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.toggleList = this.toggleList.bind(this);
    this.list = [];
    Object.entries(props.data).forEach(([key, content], i) =>
      this.list.push(
          <li id={`list-${i}`}
            key={`list-${i}`}
            className={i || props.noOpen ? '' : 'active'}
            onClick={this.toggleList} >
            {key}
          </li>,
          <div id={`content-${i}`}
            key={`content-${i}`}
            className={`list-content ${i || props.noOpen ? '' : 'active'}`}>
            {props.data[key]}
          </div>
      ));
  }

  /**
   * @param {Event} e
   */
  toggleList(e) {
    const $list = e.currentTarget;
    const num = $list.id.substr(5);
    const $content = $list.parentElement.querySelector('#content-'+num);
    if ($content) {
      $list.classList.toggle('active');
      $content.classList.toggle('active');
      window.location.hash = 'go-'+$list.id;
    }
  }

  /**
   * @return {component}
   */
  render() {
    return <ul className='enableOpen'>{this.list}</ul>;
  }
};

List.propTypes = {
  data: PropTypes.object,
  noOpen: PropTypes.bool,
};
