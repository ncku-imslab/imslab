import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import {withRouter} from 'next/router';
import Layout from '../components/layout';
import Markdown from 'react-markdown';
import Block from '../components/block';
import '../scss/layout.scss';

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
- Associate Professor, Computer Science & Information Engineering,
  National Cheng Kung University, Tainan, Taiwan (2017/2 - present)
- Assistant Professor, Computer Science & Information Engineering,
  National Cheng Kung University, Tainan, Taiwan (2010/9 - 2017/1)
- Visiting Scholar in USC, Los Angeles, U.S.A., (2012/7 - 2012/9)
- Summer Intern in IBM, Taipei, (2008/7 - 2008/12)
- Summer Intern in Otto-von-Guericke-University Magdeburg, Germany, (2006/7 - 2006/9)`;

const getResearchContent = () =>`
- Internet of Things (IoT)
- Software Defined Networking (SDN)
- Design and Analysis of Mobile Network (GSM/UMTS/LTE/LTE-A/5G/6G)
- Performance Evaluation
- Network Security`;

const Professor = ({router}) => {
  const title = router.query.title;
  const lang = router.query.lang || 'zh-tw';
  const blocks = [
    <Block key='self'>
      <Row>
        <Col lg={5} style={{textAlign: 'center'}}>
          <img style={{width: '70%'}} src='/static/images/tsaimh.jpg' />
        </Col>
        <Col lg={7}>
          <Markdown source={getIntroContent()} linkTarget='_blank' />
        </Col>
      </Row>
    </Block>,
    <Block title='Education' key='edu'>
      <Markdown source={getEduContent()} />
    </Block>,
    <Block title='Work Experience' key='work'>
      <Markdown source={getWorkContent()} />
    </Block>,
    <Block title='Research Interests' key='interests'>
      <Markdown source={getResearchContent()} />
    </Block>,
  ];
  return <Layout id='prof-container' blocks={blocks} lang={lang} pathname={router.asPath} title={title} noTabs/>;
};
Professor.propTypes = {router: PropTypes.object.isRequired};

export default withRouter(Professor);
