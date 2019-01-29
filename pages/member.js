import { Row, Col } from 'react-bootstrap';
import { withRouter } from 'next/router';
import Layout from '../components/layout';
import Markdown from 'react-markdown';
import Block from '../components/block';

import '../scss/layout.scss';
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

const numberTw = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
const numberEn = ['Zero', 'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'];
const getTitle = (lang, title) => {
  if (lang === 'en') {
    switch(title[0]) {
      case 'p': case 'm': return numberEn[title[1]] + ' year';
      case 'g': case 'b': return 'Graduate in ' + (Number.parseInt(title.substr(1)) + 1911);
      default: return title;
    }
  } else {
    switch(title[0]) {
      case 'p': return '博' + numberTw[title[1]];
      case 'm': return '碩' + numberTw[title[1]];
      case 'b': return title.substr(1) + ' 級';
      case 'g': return title.substr(1) + ' 年畢';
      default: return title;
    }
  }
};

const Member = ({ router }) => {
  const title = router.query.title;
  const lang = router.query.lang || 'zh-tw';
  const data = lang === "en" ? dataEn : dataTw;
  let section = lang === "en" ? router.asPath.substr(4) : router.asPath.substr(1);
  section = section.match(/\/$/) ? section.substr(0, section.length - 1) : section;
  const memberData = {...memberDataJson[section]};
  const blocks = [];
  for (let key in memberData) {
    const rows = [];
    const subData = {...memberData[key]};
    for (let sub in subData) {
      rows.push(<h3 key={sub} className='sub-title'>{getTitle(lang, sub)}</h3>);
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
    blocks.push(<Block key={key} title={data[key]} ref={React.createRef()}>{rows}</Block>);
  }
  return <Layout id='member-container' lang={lang} pathname={router.asPath} blocks={blocks} title={title} />;
};

export default withRouter(Member);
