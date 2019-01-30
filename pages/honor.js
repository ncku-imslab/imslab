import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'next/router';
import Layout from '../components/layout';
import Block from '../components/block';
import List from '../components/list';
import DataList from '../components/data-list';

import '../scss/layout.scss';
import dataEn from '../data/en/honor.json';
import dataTw from '../data/zh-TW/honor.json';
import honorDataJson from '../data/honors.json';

const Honor = ({router}) => {
  const title = router.query.title;
  const lang = router.query.lang || 'zh-tw';
  const data = lang === 'en' ? dataEn : dataTw;
  const honorData = {...honorDataJson};
  const blocks = [];

  Object.entries(honorData).forEach(([kind]) => {
    const kindData = {...honorData[kind]};
    Object.entries(kindData).forEach(([year]) => {
      const yearData = [...kindData[year]];
      kindData[year] = <DataList.Honor data={yearData} lang={lang} />;
    });
    blocks.push(<Block key={kind} title={data[kind]} ref={React.createRef()}><List data={kindData} /></Block>);
  });

  return <Layout id='honor-container' blocks={blocks} pathname={router.asPath} lang={lang} title={title} />;
};
Honor.propTypes = {router: PropTypes.object.isRequired};

export default withRouter(Honor);
