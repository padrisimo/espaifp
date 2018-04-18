import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';
import HeaderDropdown from './HeaderDropdown';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <NavbarBrand href="#/dashboard"></NavbarBrand>
        <NavbarToggler className="d-md-down-none" onClick={this.sidebarToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="#">Ofertas</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Clientes</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/tables/trabajadores">Trabajadores</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <HeaderDropdown notif/>
          <HeaderDropdown tasks/>
          <HeaderDropdown mssgs/>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-location-pin"></i></NavLink>
          </NavItem>
          <HeaderDropdown accnt/>
        </Nav>
        <NavbarToggler className="d-md-down-none" onClick={this.asideToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
      </header>
    );
  }
}

export default Header;
