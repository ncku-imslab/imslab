import React from 'react';
import PropTypes from 'prop-types';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.toggleList = this.toggleList.bind(this);

    this.list = [];
    let i = 0;
    for (let key in props.data) {
      this.list.push(...[
        <li id={`list-${i}`}
            key={`list-${i}`}
            className={i ? '' : 'active'}
            onClick={this.toggleList} >
          {key}
        </li>,
        <div id={`content-${i}`}
             key={`content-${i}`}
             className={`list-content ${i ? '' : 'active'}`}>
           {props.data[key]}
        </div>
      ]);
      ++i;
    }
  }

  toggleList(e) {
    var $list = e.currentTarget;
    var num = $list.id.substr(5);
    var $content = $list.parentElement.querySelector("#content-"+num);
    if($content) {
      $list.classList.toggle('active');
      $content.classList.toggle('active');
      window.location.hash = "go-"+$list.id;
    }
  }

  render() {
    return <ul className='enableOpen'>{this.list}</ul>;
  }
};

List.propTypes = {
  data: PropTypes.object.isRequred
};
