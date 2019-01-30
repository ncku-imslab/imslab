import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'next/router';
import Layout from '../components/layout';
import Markdown from 'react-markdown';
import Block from '../components/block';
import List from '../components/list';
import DataList from '../components/data-list';

import '../scss/layout.scss';
import dataEn from '../data/en/home.json';
import dataTw from '../data/zh-TW/home.json';
import newsDataJson from '../data/news.json';
import mustReadDataJson from '../data/must-read';

const Index = ({router}) => {
  const title = router.query.title;
  const lang = router.query.lang || 'zh-tw';
  const data = lang === 'en' ? dataEn : dataTw;
  const newsData = {...newsDataJson};
  const mustReadData = {...mustReadDataJson};
  Object.entries(newsData).forEach(([key]) =>
    newsData[key] = <DataList.News data={newsData[key]} lang={lang} />);
  Object.entries(mustReadData).forEach(([key]) =>
    mustReadData[key] = <Markdown source={mustReadData[key]} linkTarget="_blank" />);

  const blocks = [<Block title={data.head1 + '!'} key='welcome'>{data.content1}</Block>];
  if (lang !== 'en') {
    blocks.push(<Block title="必看" key='mustRead'><List data={mustReadData} noOpen/></Block>);
  }
  blocks.push(
      <Block title={data.head3} key='news'><List data={newsData} /></Block>,
      (<Block id="visitor" title="Visitors (since May 9th 2016)" key='visitor'>
        <a href="http://info.flagcounter.com/WV9Z" target="_blank" rel="noopener noreferrer">
          <img src="http://s06.flagcounter.com/map/WV9Z/size_m/txt_000000/border_CCCCCC/pageviews_1/viewers_0/flags_0/"
            alt="Flag Counter" border="0" />
        </a>
        <a href="http://s05.flagcounter.com/more/AX" target="_blank" rel="noopener noreferrer">
          <img src="http://s05.flagcounter.com/count2/AX/bg_FFFFFF/txt_000000/border_CCCCCC/columns_5/maxflags_30/viewers_0/labels_1/pageviews_1/flags_0/percent_0/"
            alt="Flag Counter" border="0" />
        </a>
      </Block>
      ));

  return <Layout id='home-container' pathname={router.asPath} blocks={blocks} lang={lang} title={title} noTabs/>;
};
Index.propTypes = {router: PropTypes.object.isRequired};

export default withRouter(Index);
