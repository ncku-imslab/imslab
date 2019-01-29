import { Row, Col } from 'react-bootstrap';
import { withRouter } from 'next/router';
import Layout from '../components/layout';

import '../scss/layout.scss';
import dataEn from '../data/en/contact.json';
import dataTw from '../data/zh-TW/contact.json';

const Contact = ({ router }) => {
  const title = router.query.title;
  const lang = router.query.lang || 'zh-tw';
  const data = lang === "en" ? dataEn : dataTw;
  return (<Layout lang={lang} id='contact-container' pathname={router.asPath} title={title} blocks={[
    <Row className='block' key='contact'>
      <Col md={4}>
        <img style={{ width: '100%' }} src='/static/images/logo.png' />
      </Col>
      <Col md={8}>
        <Row>
          <Col md={2}>{data.tel}</Col>
          <Col md={10}>+886-6-275-7575 ext.62520-1004</Col>
        </Row>
        <Row>
          <Col md={2}>E-mail</Col>
          <Col md={10}><a href="mailto:imslab@imslab.org">imslab@imslab.org</a></Col>
        </Row>
        <Row>
          <Col md={2}>{data.add}</Col>
          <Col md={10}>
            {data.address}<br />
            (<a href='https://www.google.com/maps/dir//22.9975457,120.2213674/@22.99731,120.221694,16z/data=!4m3!4m2!1m0!1m0?hl=zh-TW' target='_blank'>Google {data.nav}</a>)<br />
          </Col>
        </Row>
      </Col>
      <iframe className='col-md-12' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7957.577065589122!2d120.2178912995086!3d22.997032090757614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU5JzQ5LjYiTiAxMjDCsDEzJzE3LjAiRQ!5e1!3m2!1szh-TW!2sus!4v1401338254646' width='100%' height='450' frameBorder='0' style={{ border: 0 }} />
    </Row>
    ]} noTabs />);
};

export default withRouter(Contact);
