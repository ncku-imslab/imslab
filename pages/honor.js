import { Grid } from 'react-bootstrap';
import { withRouter } from 'next/router';
import Layout from '../components/layout';
import Block from '../components/block';
import List from '../components/list';
import DataList from '../components/data-list';

import '../scss/layout.scss';
import dataEn from '../data/en/honor.json';
import dataTw from '../data/zh-TW/honor.json';
import honorDataJson from '../data/honors.json';

const Honor = ({ router }) => {
  const lang = router.query.lang || 'zh-tw';
  const data = lang === "en" ? dataEn : dataTw;
  const honorData = {...honorDataJson};
  const contents = [];
  
  for (let key in honorData) {
    const subData = {...honorData[key]};
    for (let sub in honorData[key]) {
      subData[sub] = <DataList.Honor data={subData[sub]} lang={lang} />
    }
    contents.push(<Block key={key} title={data[key]}><List data={subData} /></Block>);
  }

  return (<div>
    <Layout.Header 
      pathname={router.pathname}
      lang={lang} />
    <Grid fluid>{contents}</Grid>
  </div>);
};

export default withRouter(Honor);
