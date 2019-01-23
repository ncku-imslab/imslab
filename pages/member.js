import { Grid, Row, Col } from 'react-bootstrap';
import { withRouter } from 'next/router';
import Markdown from 'react-markdown';
import Layout from '../components/layout';
import Block from '../components/block';

import '../scss/member.scss';
import dataEn from '../data/en/member.json';
import dataTw from '../data/zh-TW/member.json';
import memberDataJson from '../data/members.json';

const getIndividualElm = (p, data) => (
  <Col md={4}>
    <div className='photo' style={{ backgroundImage: `url('/static/images/members/${p.image}')` }} />
    <div className='subtitle'>
      {p.name_ch} {p.comment && p.comment} <br />
      {p.name_en && '(' + p.name_en + ')'}
    </div>
    {p.paper && (<Row className='comment'>
      <Col md={3}>{data.thesis}</Col>
      <Col md={9}>{p.paper}</Col>
    </Row>)}
    {p.proj && (<Row className='comment'>
      <Col md={3}>{data.proj}</Col>
      <Col md={9}>{p.proj}</Col>
    </Row>)}
    {p.job && (<Row className='comment'>
      <Col md={3}>{data.destn}</Col>
      <Col md={9}>{p.job}</Col>
    </Row>)}
  </Col>
);

const Member = ({ router }) => {
  const lang = router.query.lang || 'zh-tw';
  const data = lang === "en" ? dataEn : dataTw;
  const memberData = {...memberDataJson[router.asPath.substr(1)]};
  const blocks = [];
  for (let key in memberData) {
    const rows = [];
    const subData = {...memberData[key]};
    for (let sub in subData) {
      rows.push(<h3 key={sub} className='sub-title'>{sub}</h3>);
      const ppls = [...subData[sub]];
      for (let i = 0; i < ppls.length; i += 3) {
        rows.push((
        <Row key={sub + i} className='member-row'>
          {getIndividualElm(ppls[i], data)}
          {i + 1 < ppls.length && getIndividualElm(ppls[i + 1], data)}
          {i + 2 < ppls.length && getIndividualElm(ppls[i + 2], data)}
        </Row>));
      }
    }
    blocks.push(<Block key={key} title={data[key]}>{rows}</Block>);
  }
  return (<div>
    <Layout.Header 
      pathname={router.pathname}
      lang={lang} />
    <Grid id='member-container' fluid>{blocks}</Grid>
  </div>);
};

export default withRouter(Member);
