import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';

const DataList = {};

DataList.News = ({data, lang}) => {
  const rows = [];
  data.forEach((news, i) => {
    rows.push(
        <Row key={`news-${i}`} style={{marginTop: '10px'}} >
          <Col md={2} className='date'>{news.date}</Col>
          <Col md={1} xs={2} className='type'>{lang === 'en' ? 'grats' : news.type}</Col>
          <Col md={9} xs={10}>
            {lang === 'en' && news.description_en ? news.description_en : news.description}
          </Col>
        </Row>
    );
    if (news.comment) {
      rows.push(
          <Row key={`news-comment-${i}`}>
            <Col md={3} xs={2} />
            <Col md={9} xs={10} className='comment'>
              {lang === 'en' && news.comment_en ? news.comment_en : news.comment}
            </Col>
          </Row>
      );
    }
  });
  return rows;
};
DataList.News.propTypes = {
  lang: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

DataList.Honor = ({data, lang}) => data.map((d, i) => (
  <Row key={`honor-${i}`} style={{margin: '5px -15px'}}>
    <Col md={3}>{lang === 'en' && d.name_en ? d.name_en : d.name}</Col>
    <Col md={9}>{lang === 'en' && d.content_en ? d.content_en : d.content}</Col>
  </Row>
));
DataList.Honor.propTypes = {
  lang: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default DataList;
