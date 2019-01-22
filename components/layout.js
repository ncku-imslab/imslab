import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import Link from "next/link";
import Head from "next/head";
import dataEn from '../data/en/menu.json';
import dataTw from '../data/zh-TW/menu.json';

const Layout = { host: "http://imslab.org" };

Layout.Head = (props) => (
  <Head>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <link rel="alternate" href={Layout.host + props.page} hrefLang={props.lang === "en" ? "zh-tw" : "en"} />
    <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
    <link rel="icon" type="image/png" href="/static/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content={props.title} />
    <meta property="og:site_name" content={props.title} />
    <meta property="og:description" content="IMS Lab website" />
    <meta property="og:image" content="/static/images/logo.png" />
    <title>{props.title}</title>
    <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
    <link rel="stylesheet" href="/static/css/frame/bootstrap.min.css" />
    <link href='//fonts.googleapis.com/css?family=Noto+Sans:400,700' rel='stylesheet' type='text/css' />
    <link rel="stylesheet" href="/static/css/frame/font-awesome.min.css" />
  </Head>
);

Layout.Header = (props) => {
  const langUrl = props.lang === 'en' ? '/en' : '';
  const data = props.lang === 'en' ? dataEn : dataTw;
  return (
    <div>
      <div className="brand">
        <Link href={langUrl + '/'} passHref><a>IMS Lab</a></Link>
      </div>
      <div className="brand">
        {"Intelligent Mobile Service Laboratory | 智慧化行動服務實驗室"}
      </div>
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href={langUrl + '/'}>
              <img alt="imslab" src="/static/images/logo.png" />
              {" IMS Lab"}
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem 
              href={langUrl + '/'} 
              className={props.page === '/' ? 'active' : ''} >
                {data.home}
            </NavItem>
            <NavItem
              href={langUrl + "/research"}
              className={props.page === '/research' ? 'active' : ''} >
                {data.research}
            </NavItem>
            <NavDropdown title={data.member} id="nav-member-dropdown">
              <MenuItem href={langUrl + "/professor"}>{data.member_prof}</MenuItem>
              <MenuItem href={langUrl + "/student"}>{data.member_student}</MenuItem>
              <MenuItem href={langUrl + "/alumni"}>{data.member_alumni}</MenuItem>
            </NavDropdown>
            <NavItem 
              href={langUrl + "/honor"} 
              className={props.page === '/honor' ? 'active' : ''} >
                {data.honor}
            </NavItem>
            <NavItem
              href={langUrl + "/resource"}
              className={props.page === '/resource' ? 'active' : ''} >
                {data.resource}
            </NavItem>
            <NavItem 
              href={langUrl + "/contact"}
              className={props.page === '/contact' ? 'active' : ''} >
                {data.contact}
            </NavItem>
            <NavItem 
              href={ (langUrl === '/en' ? '' : '/en') + props.page} >
                {data.lang}
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

Layout.Footer = () => (
  <div id="footer" className="block">
    Copyright © <img src="/static/images/logo.png" alt="imslab" /> IMS Lab 2017
  </div>
);

export default Layout;
