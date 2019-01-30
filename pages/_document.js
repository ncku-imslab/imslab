import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';

/**
 * MyDocument for static files
 */
export default class MyDocument extends Document {
  /**
   * @param {any} ctx
   * @return {object}
   */
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  /**
   * @return {component}
   */
  render() {
    const host = 'http://imslab.org';
    const props = this.props.__NEXT_DATA__;
    const lang = props.query && props.query.lang === 'en' ? 'en' : 'zh-tw';
    const title = props.query ? props.query.title : '';
    return (
      <html lang={lang}>
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <link rel="alternate" href={host + props.page} hrefLang={lang === 'en' ? 'zh-tw' : 'en'} />
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="icon" type="image/png" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content={title} />
          <meta property="og:site_name" content={title} />
          <title>{title}</title>
          <meta property="og:description" content="IMS Lab website" />
          <meta property="og:image" content="/static/images/logo.png" />
          <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
          <link rel="stylesheet" href="/static/frame/bootstrap.min.css" />
          <link href='https://fonts.googleapis.com/css?family=Noto+Sans:400,700' rel='stylesheet' type='text/css' />
          <link rel="stylesheet" href="/static/frame/font-awesome.min.css" />
          <Head />
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
};
