import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Navbar, Nav, NavItem, MenuItem, NavDropdown, Tabs, Tab} from 'react-bootstrap';
import Link from 'next/link';
import dataEn from '../data/en/menu.json';
import dataTw from '../data/zh-TW/menu.json';

/**
 * Main layout for pages
 */
export default class Layout extends React.Component {
  /**
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.navbarRef = React.createRef();
    this.state = {
      fixedTop: false,
      activeKey: props.blocks[0].ref,
    };

    this.handleFixedTop = this.handleFixedTop.bind(this);
    this.handleActiveTab = this.handleActiveTab.bind(this);
  }

  /**
   * componentDidMount
   */
  componentDidMount() {
    this.navbarH = this.navbarRef.current.clientHeight;
    window.addEventListener('scroll', this.handleFixedTop);
    if (!this.props.noTabs) {
      window.addEventListener('scroll', this.handleActiveTab);
    }
  }

  /**
   * componentWillUnmount
   */
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleFixedTop);
    if (!this.props.noTabs) {
      window.removeEventListener('scroll', this.handleActiveTab);
    }
  }

  /**
   * handleFixedTop
   */
  handleFixedTop() {
    const offset = window.pageYOffset || 0;
    if (offset > this.navbarRef.current.offsetTop) this.setState({fixedTop: true});
    else this.setState({fixedTop: false});
  }

  /**
   * handleActiveTab: automatically tab switch
   */
  handleActiveTab() {
    const offset = window.pageYOffset || 0;
    let goal = this.props.blocks[0].ref || 0;
    this.props.blocks.forEach((block) => goal = block.ref.current.offsetTop - this.navbarH < offset ? block.ref : goal);
    this.setState({activeKey: goal});
  }

  /**
   * @return {component}
   */
  render() {
    return (
      <div id={this.props.id}>
        <Header pathname={this.props.pathname} lang={this.props.lang} key={this.state.fixedTop}
          noTabs={this.props.noTabs} fixedTop={this.state.fixedTop} navbarRef={this.navbarRef} />
        <Grid fluid>
          { !this.props.noTabs &&
            <NavTab blocks={this.props.blocks} fixedTop={this.state.fixedTop} activeKey={this.state.activeKey}/> }
          { this.props.blocks }
        </Grid>
        <Footer />
      </div>
    );
  }
};
Layout.defaultProps = {
  noTabs: false,
};
Layout.propTypes = {
  blocks: PropTypes.array,
  noTabs: PropTypes.bool,
  id: PropTypes.string,
  pathname: PropTypes.string,
  lang: PropTypes.string,
};

/**
 * Header
 */
class Header extends React.Component {
  /**
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.langUrl = props.lang === 'en' ? '/en' : '';
    this.data = props.lang === 'en' ? dataEn : dataTw;
    this.state = {showNav: this.props.noTabs || !props.fixedTop, isToggle: false};
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }

  /**
   * toggleCollapse
   */
  toggleCollapse() {
    this.setState({showNav: !this.state.showNav});
  }

  /**
   * Navbar.Collapse onToggle callback
   */
  onToggle() {
    this.setState({showNav: true, isToggle: true});
  }

  /**
   * @return {component}
   */
  render() {
    const zIndex = {zIndex: this.state.showNav && !this.state.isToggle ? 1200 : 1100};
    const collapse = {
      visibility: this.state.showNav ? 'visible' : 'hidden',
      marginTop: this.state.showNav && !this.props.noTabs && this.props.fixedTop && !this.state.isToggle ? '8px' : '0',
    };
    const flag = this.props.noTabs ? '' : this.state.showNav ? '▲' : '▼';
    const toggleBtn = <div className='nav-flag' onClick={this.toggleCollapse}>{flag}</div>;
    const fixedTopProp = {fixedTop: this.props.fixedTop};
    let pathname = this.props.lang === 'en' ? this.props.pathname.substr(3) : this.props.pathname;
    pathname = pathname.length ? pathname : '/';
    pathname = pathname.match(/^\/.*\/$/) ? pathname.substr(0, pathname.length - 1) : pathname;
    return (
      <div>
        <div className="brand">
          <Link href={this.langUrl + '/'} passHref><a>IMS Lab</a></Link>
        </div>
        <div className="brand">
          {'Intelligent Mobile Service Laboratory | 智慧化行動服務實驗室'}
        </div>
        <div ref={this.props.navbarRef}>
          <Navbar fluid {...fixedTopProp} style={zIndex} onToggle={this.onToggle}>
            <Navbar.Header>
              { !this.state.isToggle && toggleBtn }
              <Navbar.Brand>
                <a href={this.langUrl + '/'}>
                  <img alt="imslab" src="/static/images/logo.png" />
                  { (!this.props.fixedTop || this.props.noTabs) &&
                    <span className="navbar-brand-text">{' IMS Lab'}</span> }
                </a>
              </Navbar.Brand>
              { this.props.fixedTop && !this.props.noTabs ?
                <Navbar.Toggle as="<div>" className="nav-flag">{flag}</Navbar.Toggle> :
                <Navbar.Toggle /> }
            </Navbar.Header>
            <Navbar.Collapse style={collapse}>
              <Nav>
                <NavItem
                  href={this.langUrl + '/'}
                  className={pathname === '/' ? 'active' : ''} >
                  {this.data.home}
                </NavItem>
                <NavItem
                  href={this.langUrl + '/research'}
                  className={pathname === '/research' ? 'active' : ''} >
                  {this.data.research}
                </NavItem>
                <NavDropdown
                  title={this.data.member}
                  id="nav-member-dropdown"
                  className={pathname === '/professor' ||
                    pathname === '/student' ||
                    pathname === '/alumni' ? 'active' : ''} >
                  <MenuItem href={this.langUrl + '/professor'}>{this.data.member_prof}</MenuItem>
                  <MenuItem href={this.langUrl + '/student'}>{this.data.member_student}</MenuItem>
                  <MenuItem href={this.langUrl + '/alumni'}>{this.data.member_alumni}</MenuItem>
                </NavDropdown>
                <NavItem
                  href={this.langUrl + '/honor'}
                  className={pathname === '/honor' ? 'active' : ''} >
                  {this.data.honor}
                </NavItem>
                <NavItem
                  href={this.langUrl + '/resource'}
                  className={pathname === '/resource' ? 'active' : ''} >
                  {this.data.resource}
                </NavItem>
                <NavItem
                  href={this.langUrl + '/contact'}
                  className={pathname === '/contact' ? 'active' : ''} >
                  {this.data.contact}
                </NavItem>
                <NavItem
                  href={ (this.langUrl === '/en' ? '' : '/en') + pathname} >
                  {this.data.lang}
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}
Header.defaultProps = {
  noTabs: false,
  fixedTop: false,
};
Header.propTypes = {
  lang: PropTypes.string.isRequired,
  pathname: PropTypes.string,
  noTabs: PropTypes.bool,
  fixedTop: PropTypes.bool,
  navbarRef: PropTypes.object,
};

export const Footer = () => (
  <div id="footer" className="block">
    Copyright © <img src="/static/images/logo.png" alt="imslab" /> IMS Lab 2017
  </div>
);

export const NavTab = ({blocks, fixedTop, activeKey}) => (
  <Tabs id="nav-tabs" className={fixedTop ? 'nav-tabs-fixed-top' : ''}
    onSelect={handleTab} activeKey={activeKey} >
    { blocks
        .filter((block) => block.ref)
        .map((block, index) =>
          <Tab eventKey={block.ref} key={index} title={block.props.title} /> )}
  </Tabs>
);
NavTab.defaultProps = {
  fixedTop: false,
};
NavTab.propTypes = {
  blocks: PropTypes.array,
  fixedTop: PropTypes.bool,
  activeKey: PropTypes.any,
};

/**
 * @param {number} current: current scroll position
 * @param {number} dir: scroll direction [-1, 1]
 * @param {number} goal
 */
const scrolling = (current, dir, goal) => {
  const gap = Math.abs(current - goal);
  const unit = gap > 100 ? gap / 10 : 10;
  current += unit * dir;
  window.scrollBy(0, unit * dir);
  if (gap > unit) {
    setTimeout(scrolling.bind(null, current, dir, goal), 10);
  } else {
    window.scroll(0, goal);
  }
};

/**
 * scroll to tab
 * @param {object} ref: tab's ref
 */
const handleTab = (ref) => {
  const idTop = ref.current.offsetTop;
  const goal = idTop - 100;
  const current = window.pageYOffset || 0;
  const dir = current > goal ? -1 : +1;
  scrolling(current, dir, goal);
};
