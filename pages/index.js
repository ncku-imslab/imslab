import { Grid } from 'react-bootstrap';
import { withRouter } from 'next/router'
import Markdown from 'react-markdown';
import Block from '../components/block';
import List from '../components/list';
import DataList from '../components/data-list';

import '../scss/home.scss';
import dataEn from '../data/en/home.json';
import dataTw from '../data/zh-TW/home.json';
import newsDataJson from '../data/news.json';
import mustReadDataJson from '../data/must-read';

const Index = ({ router }) => {
  const lang = router.query.lang || 'zh-tw';
  const data = lang === "en" ? dataEn : dataTw;
  const newsData = {...newsDataJson};
  const mustReadData = {...mustReadDataJson};
  for (let key in newsData) {
    newsData[key] = <DataList.News data={newsData[key]} lang={lang} />
  }
  for (let key in mustReadData) {
    mustReadData[key] = <Markdown source={mustReadData[key]} linkTarget="_blank" />;
  }

  return (
    <Grid fluid>
      <Block title={data.head1 + '!'}>
        {data.content1}
      </Block>
      { lang === 'en' ? '' : (
          <Block title="必看">
            <List data={mustReadData} /> 
          </Block> ) }
      <Block title={data.head3}>
        <List data={newsData} />
      </Block>
      <Block id="visitor" title="Visitors (since May 9th 2016)">
        <a href="http://info.flagcounter.com/WV9Z" target="_blank">
          <img src="http://s06.flagcounter.com/map/WV9Z/size_m/txt_000000/border_CCCCCC/pageviews_1/viewers_0/flags_0/" alt="Flag Counter" border="0" />
        </a>
        <a href="http://s05.flagcounter.com/more/AX" target="_blank">
          <img src="http://s05.flagcounter.com/count2/AX/bg_FFFFFF/txt_000000/border_CCCCCC/columns_5/maxflags_30/viewers_0/labels_1/pageviews_1/flags_0/percent_0/" alt="Flag Counter" border="0" />
        </a>
      </Block>
    </Grid>
  );
};

export default withRouter(Index);
