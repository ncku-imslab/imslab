import { Grid, Navbar, Nav, NavItem, MenuItem, NavDropdown, Tabs, Tab } from 'react-bootstrap';
import Link from "next/link";
import Head from "next/head";
import dataEn from '../data/en/menu.json';
import dataTw from '../data/zh-TW/menu.json';

const Layout = ({ lang, pathname, blocks, noTabs, id, title }) => (
  <div id={id}>
    <Header pathname={pathname} lang={lang} />
    <Grid id='resource-container' fluid>
      { !noTabs && <NavTab blocks={blocks} /> }
      {blocks}
    </Grid>
    <Footer />
  </div>
);

export const Header = ({ lang, pathname }) => {
  const langUrl = lang === 'en' ? '/en' : '';
  const data = lang === 'en' ? dataEn : dataTw;
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
              className={pathname === '/' ? 'active' : ''} >
                {data.home}
            </NavItem>
            <NavItem
              href={langUrl + "/research"}
              className={pathname === '/research' ? 'active' : ''} >
                {data.research}
            </NavItem>
            <NavDropdown 
              title={data.member} 
              id="nav-member-dropdown"
              className={pathname === '/professor' || pathname === '/member' ? 'active' : ''} >
              <MenuItem href={langUrl + "/professor"}>{data.member_prof}</MenuItem>
              <MenuItem href={langUrl + "/student"}>{data.member_student}</MenuItem>
              <MenuItem href={langUrl + "/alumni"}>{data.member_alumni}</MenuItem>
            </NavDropdown>
            <NavItem 
              href={langUrl + "/honor"} 
              className={pathname === '/honor' ? 'active' : ''} >
                {data.honor}
            </NavItem>
            <NavItem
              href={langUrl + "/resource"}
              className={pathname === '/resource' ? 'active' : ''} >
                {data.resource}
            </NavItem>
            <NavItem 
              href={langUrl + "/contact"}
              className={pathname === '/contact' ? 'active' : ''} >
                {data.contact}
            </NavItem>
            <NavItem 
              href={ (langUrl === '/en' ? '' : '/en') + pathname} >
                {data.lang}
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export const Footer = () => (
  <div id="footer" className="block">
    Copyright © <img src="/static/images/logo.png" alt="imslab" /> IMS Lab 2017
  </div>
);

export const NavTab = ({ blocks }) => (
  <Tabs id='nav-tabs' defaultActiveKey={1} onSelect={handleTab}>
    { blocks.map((e, index) =>
      <Tab eventKey={index + 1} key={index} title={e.props.title} /> )}
  </Tabs>
);

const scrolling = (current, dir, goal) => {
  var unit = 20;
  current += unit * dir;
  window.scrollBy(0, unit);
  if (Math.abs(current - goal) > unit) {
    setTimeout(scrolling.bind(null, current, dir, goal), 10);
  } else {
    window.scroll(0, goal);
  }
};

const handleTab = section => {
  var body = document.body;
  var idTop = document.querySelectorAll('.block')[section - 1].offsetTop;
  var goal = idTop - 82;
  var current = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0);
  var dir = current > goal ? -1 : +1;
  scrolling(current, dir, goal);
};

export default Layout;
