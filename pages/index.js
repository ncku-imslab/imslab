import { Grid } from 'react-bootstrap';
import { withRouter } from 'next/router'
import '../scss/home.scss';
import Layout from '../components/layout';
import dataEn from '../data/en/home.json';
import dataTw from '../data/zh-TW/home.json';

const Index = (props) => {
  const lang = props.router.query.lang;
  const data = lang === "en" ? dataEn : dataTw;
  return (
      <Grid fluid>
        <Layout.Block
          title={data.head1 + '!'}
          content={data.content1}
        />
      </Grid>
  );
};

export default withRouter(Index);
