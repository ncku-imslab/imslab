import { Grid } from 'react-bootstrap';
import { withRouter } from 'next/router'
import '../scss/research.scss';
import Layout from '../components/layout';
import dataEn from '../data/en/research.json';
import dataTw from '../data/zh-TW/research.json';

const Research = (props) => {
  const lang = props.router.query.lang;
  const data = lang === "en" ? dataEn : dataTw;
  return (
      <Grid fluid>
        <Layout.Block title={data.head1} />
      </Grid>
  );
};

export default withRouter(Research);
