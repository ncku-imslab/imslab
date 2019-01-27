import React from 'react';
import { Grid, Navbar, Nav, NavItem, MenuItem, NavDropdown, Tabs, Tab } from 'react-bootstrap';
import Link from "next/link";
import Head from "next/head";
import dataEn from '../data/en/menu.json';
import dataTw from '../data/zh-TW/menu.json';

const Layout = ({ id, lang, pathname, blocks, noTabs }) => (
  <div id={id}>
    <Header pathname={pathname} lang={lang} />
    <Grid fluid>
      { !noTabs && <NavTab blocks={blocks} /> }
      { blocks }
    </Grid>
    <Footer />
  </div>
);

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.langUrl = props.lang === 'en' ? '/en' : '';
    this.data = props.lang === 'en' ? dataEn : dataTw;
    this.handleScrolling = this.handleScrolling.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrolling);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrolling);
  }

  handleScrolling() {
    // TODO: handle navtop fixed while scrolling
  }

  render() {
    return (
      <div>
        <div className="brand">
          <Link href={this.langUrl + '/'} passHref><a>IMS Lab</a></Link>
        </div>
        <div className="brand">
          {"Intelligent Mobile Service Laboratory | 智慧化行動服務實驗室"}
        </div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href={this.langUrl + '/'}>
                <img alt="imslab" src="/static/images/logo.png" />
                {" IMS Lab"}
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem 
                href={this.langUrl + '/'} 
                className={this.props.pathname === '/' ? 'active' : ''} >
                  {this.data.home}
              </NavItem>
              <NavItem
                href={this.langUrl + "/research"}
                className={this.props.pathname === '/research' ? 'active' : ''} >
                  {this.data.research}
              </NavItem>
              <NavDropdown 
                title={this.data.member} 
                id="nav-member-dropdown"
                className={this.props.pathname === '/professor' || this.props.pathname === '/member' ? 'active' : ''} >
                <MenuItem href={this.langUrl + "/professor"}>{this.data.member_prof}</MenuItem>
                <MenuItem href={this.langUrl + "/student"}>{this.data.member_student}</MenuItem>
                <MenuItem href={this.langUrl + "/alumni"}>{this.data.member_alumni}</MenuItem>
              </NavDropdown>
              <NavItem 
                href={this.langUrl + "/honor"} 
                className={this.props.pathname === '/honor' ? 'active' : ''} >
                  {this.data.honor}
              </NavItem>
              <NavItem
                href={this.langUrl + "/resource"}
                className={this.props.pathname === '/resource' ? 'active' : ''} >
                  {this.data.resource}
              </NavItem>
              <NavItem 
                href={this.langUrl + "/contact"}
                className={this.props.pathname === '/contact' ? 'active' : ''} >
                  {this.data.contact}
              </NavItem>
              <NavItem 
                href={ (this.langUrl === '/en' ? '' : '/en') + this.props.pathname} >
                  {this.data.lang}
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
};

export const Footer = () => (
  <div id="footer" className="block">
    Copyright © <img src="/static/images/logo.png" alt="imslab" /> IMS Lab 2017
  </div>
);

export const NavTab = ({ blocks }) => (
  <Tabs id='nav-tabs' defaultActiveKey={1} onSelect={handleTab}>
    { blocks
        .filter(block => block.ref)
        .map((block, index) =>
          <Tab eventKey={block.ref} key={index} title={block.props.title} /> )}
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

const handleTab = ref => {
  var idTop = ref.current.offsetTop
  var goal = idTop - 82;
  var current = window.pageYOffset || 0;
  var dir = current > goal ? -1 : +1;
  scrolling(current, dir, goal);
};

export default Layout;
