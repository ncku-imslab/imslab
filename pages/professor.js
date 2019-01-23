import { Grid, Row, Col } from 'react-bootstrap';
import { withRouter } from 'next/router';
import Markdown from 'react-markdown';
import Layout from '../components/layout';
import Block from '../components/block';
import '../scss/prof.scss';

const getIntroContent = () => `
### [蔡孟勳 (Meng-Hsun Tsai)](http://imslab.org/~tsaimh/)
- Computer Science and Information Engineering, NCKU,
No. 1, University Road, Tainan 701, Taiwan
- Tel: +886-6-275-7575 ext.62518
- Fax: +886-6-2747076
- E-mail: tsaimh AT csie DOT ncku DOT edu DOT tw`;

const getEduContent = () => `
- 2004 ~ 2009: Ph.D., Computer Science, National Chiao Tung University
- 2002 ~ 2004: M.S., Computer Science & Information Engineering, National Chiao Tung University
- 1998 ~ 2002: B.S., Computer Science & Information Engineering, National Chiao Tung University`;

const getWorkContent = () =>`
- Associate Professor, Computer Science & Information Engineering, National Cheng Kung University, Tainan, Taiwan (2017/2 - present)
- Assistant Professor, Computer Science & Information Engineering, National Cheng Kung University, Tainan, Taiwan (2010/9 - 2017/1)
- Visiting Scholar in USC, Los Angeles, U.S.A., (2012/7 - 2012/9)
- Summer Intern in IBM, Taipei, (2008/7 - 2008/12)
- Summer Intern in Otto-von-Guericke-University Magdeburg, Germany, (2006/7 - 2006/9)`;

const getResearchContent = () =>`
- Internet of Things (IoT)
- Software Defined Networking (SDN)
- Design and Analysis of Mobile Network (GSM/UMTS/LTE/LTE-A)
- Performance Evaluation
- Voice over IP (VoIP) Network`;

const Professor = ({ router }) => {
  const lang = router.query.lang || 'zh-tw';
  return (<div>
    <Layout.Header 
      pathname={router.pathname}
      lang={lang} />
    <Grid fluid>
      <Row className='block'>
        <Col lg={5} style={{ textAlign: 'center' }}>
          <img style={{ width: '70%' }} src='/static/images/tsaimh.jpg' />
        </Col>
        <Col lg={7}>
          <Markdown source={getIntroContent()} linkTarget='_blank' />
        </Col>
      </Row>
      <Block title='Education'>
        <Markdown source={getEduContent()} />
      </Block>
      <Block title='Work Experience'>
        <Markdown source={getWorkContent()} />
      </Block>
      <Block title='Research Interests'>
        <Markdown source={getResearchContent()} />
      </Block>
    </Grid>
  </div>);
};

export default withRouter(Professor);
