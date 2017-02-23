import Document, { Head, Main, NextScript } from 'next/document';
import Layout from '../components/layout';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const props = this.props.__NEXT_DATA__;
    const lang = props.query && props.query.lang === 'en' ? 'en' : 'zh-tw';
    const title = props.query ? props.query.title : '';
    return (
      <html lang={lang}>
        <Head>
          <Layout.Head
            page={props.page}
            lang={lang}
            title={title} />
        </Head>
        <body>
          <Layout.Header 
            page={props.page}
            lang={lang} />
          <Main />
          <NextScript />
          <Layout.Footer />
        </body>
      </html>
    );
  }
};
