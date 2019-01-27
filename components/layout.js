import React from 'react';
import { Grid, Navbar, Nav, NavItem, MenuItem, NavDropdown, Tabs, Tab } from 'react-bootstrap';
import Link from "next/link";
import Head from "next/head";
import dataEn from '../data/en/menu.json';
import dataTw from '../data/zh-TW/menu.json';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.navbarRef = React.createRef();
    this.state = { fixedTop: false };

    this.handleFixedTop = this.handleFixedTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleFixedTop)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleFixedTop);
  }

  handleFixedTop() {
    const offset = window.pageYOffset || 0;
    if(offset > this.navbarRef.current.offsetTop) this.setState({ fixedTop: true });
    else this.setState({ fixedTop: false });
  }

  render() {
    return (
      <div id={this.props.id}>
        <Header pathname={this.props.pathname} lang={this.props.lang} 
                fixedTop={this.state.fixedTop} navbarRef={this.navbarRef} />
        <Grid fluid>
          { !this.props.noTabs && <NavTab blocks={this.props.blocks} fixedTop={this.state.fixedTop} /> }
          { this.props.blocks }
        </Grid>
        <Footer />
      </div>
    );
  }
};

const Header = ({ lang, pathname, fixedTop, navbarRef }) => {
  const langUrl = lang === 'en' ? '/en' : '';
  const data = lang === 'en' ? dataEn : dataTw;
  const fixedTopProp = { fixedTop: fixedTop };
  return (
    <div>
      <div className="brand">
        <Link href={langUrl + '/'} passHref><a>IMS Lab</a></Link>
      </div>
      <div className="brand">
        {"Intelligent Mobile Service Laboratory | 智慧化行動服務實驗室"}
      </div>
      <div ref={navbarRef}>
        <Navbar fluid {...fixedTopProp}>
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
    </div>
  );
};

export const Footer = () => (
  <div id="footer" className="block">
    Copyright © <img src="/static/images/logo.png" alt="imslab" /> IMS Lab 2017
  </div>
);

export const NavTab = ({ blocks, fixedTop}) => (
  <Tabs id="nav-tabs" className={fixedTop ? 'nav-tabs-fixed-top' : ''}
        defaultActiveKey={1} onSelect={handleTab}>
    { blocks
        .filter(block => block.ref)
        .map((block, index) =>
          <Tab eventKey={block.ref} key={index} title={block.props.title} /> )}
  </Tabs>
);

const scrolling = (current, dir, goal) => {
  var unit = 20;
  current += unit * dir;
  window.scrollBy(0, unit * dir);
  if (Math.abs(current - goal) > unit) {
    setTimeout(scrolling.bind(null, current, dir, goal), 10);
  } else {
    window.scroll(0, goal);
  }
};

const handleTab = ref => {
  var idTop = ref.current.offsetTop
  // TODO: adjust "82"
  var goal = idTop - 82;
  var current = window.pageYOffset || 0;
  var dir = current > goal ? -1 : +1;
  scrolling(current, dir, goal);
};
