import { Grid } from 'react-bootstrap';
import { withRouter } from 'next/router'
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
  for (let key in honorData) {
  }
  const contents = [];
  
  for (let key in honorData) {
    const subData = {...honorData[key]};
    for (let sub in honorData[key]) {
      subData[sub] = <DataList.Honor data={subData[sub]} lang={lang} />
    }
    contents.push(<Block title={data[key]}><List data={subData} /></Block>);
  }

  return <Grid fluid>{contents}</Grid>;
};

export default withRouter(Honor);
