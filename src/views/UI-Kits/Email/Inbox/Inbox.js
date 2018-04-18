import React, {Component} from 'react';
import { Nav, NavItem, NavLink, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge, Button, ButtonGroup } from 'reactstrap';

class Inbox extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="email-app mb-4">
          <nav>
            <a href="#/ui-kits/email/compose" className="btn btn-danger btn-block">Nuevo Email</a>
            <Nav>
              <NavItem>
                <NavLink href="#/ui-kits/email/inbox"><i className="fa fa-inbox"></i> Entrada <Badge color="danger">4</Badge></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><i className="fa fa-star"></i> Favoritos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><i className="fa fa-rocket"></i> Enviados</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><i className="fa fa-trash-o"></i> Papelera</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><i className="fa fa-bookmark"></i> Importante<Badge color="info">5</Badge></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><i className="fa fa-exclamation-circle"></i> Spam <Badge color="danger">4</Badge></NavLink>
              </NavItem>
            </Nav>
          </nav>
          <main className="inbox">
            <div className="toolbar">
              <ButtonGroup>
                <Button color="light"><span className="fa fa-envelope"></span></Button>
                <Button color="light"><span className="fa fa-star"></span></Button>
                <Button color="light"><span className="fa fa-star-o"></span></Button>
                <Button color="light"><span className="fa fa-bookmark-o"></span></Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button color="light"><span className="fa fa-mail-reply"></span></Button>
                <Button color="light"><span className="fa fa-mail-reply-all"></span></Button>
                <Button color="light"><span className="fa fa-mail-forward"></span></Button>
              </ButtonGroup>
              <Button color="light"><span className="fa fa-trash-o"></span></Button>
              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret color="light">
                  <span className="fa fa-tags"></span>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Etiqueta<Badge color="danger">Personal</Badge></DropdownItem>
                  <DropdownItem>Etiqueta<Badge color="info">Trabajo</Badge></DropdownItem>
                  <DropdownItem>Etiqueta<Badge color="success">Cliente</Badge></DropdownItem>
                  <DropdownItem>Etiqueta<Badge color="warning">Noticia</Badge></DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
              <ButtonGroup className="float-right">
                <Button color="light"><span className="fa fa-chevron-left"></span></Button>
                <Button color="light"><span className="fa fa-chevron-right"></span></Button>
              </ButtonGroup>
            </div>

            <ul className="messages">
              <li className="message unread">
                <a href="#">
                  <div className="actions">
                    <span className="action"><i className="fa fa-square-o"></i></span>
                    <span className="action"><i className="fa fa-star-o"></i></span>
                  </div>
                  <div className="header">
                    <span className="from">V Escribà</span>
                    <span className="date"><span className="fa fa-paper-clip"></span> Hoy, 3:47 PM</span>
                  </div>
                  <div className="title">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                </a>
              </li>
              <li className="message">
                <a href="#">
                  <div className="actions">
                    <span className="action"><i className="fa fa-square-o"></i></span>
                    <span className="action"><i className="fa fa-star-o"></i></span>
                  </div>
                  <div className="header">
                    <span className="from">V Escribà</span>
                    <span className="date"><span className="fa fa-paper-clip"></span> Hoy, 3:47 PM</span>
                  </div>
                  <div className="title">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                </a>
              </li>
              <li className="message">
                <a href="#">
                  <div className="actions">
                    <span className="action"><i className="fa fa-square-o"></i></span>
                    <span className="action"><i className="fa fa-star-o"></i></span>
                  </div>
                  <div className="header">
                    <span className="from">V Escribà</span>
                    <span className="date">Hoy, 3:47 PM</span>
                  </div>
                  <div className="title">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                </a>
              </li>
              <li className="message unread">
                <a href="#">
                  <div className="actions">
                    <span className="action"><i className="fa fa-square-o"></i></span>
                    <span className="action"><i className="fa fa-star-o"></i></span>
                  </div>
                  <div className="header">
                    <span className="from">V Escribà</span>
                    <span className="date">Hoy, 3:47 PM</span>
                  </div>
                  <div className="title">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                </a>
              </li>
              <li className="message">
                <a href="#">
                  <div className="actions">
                    <span className="action"><i className="fa fa-square-o"></i></span>
                    <span className="action"><i className="fa fa-star-o"></i></span>
                  </div>
                  <div className="header">
                    <span className="from">V Escribà</span>
                    <span className="date">Hoy, 3:47 PM</span>
                  </div>
                  <div className="title">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>

                </a>
              </li>
              <li className="message">
                <a href="#">
                  <div className="actions">
                    <span className="action"><i className="fa fa-square-o"></i></span>
                    <span className="action"><i className="fa fa-star-o"></i></span>
                  </div>
                  <div className="header">
                    <span className="from">V Escribà</span>
                    <span className="date">Hoy, 3:47 PM</span>
                  </div>
                  <div className="title">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                </a>
              </li>
              <li className="message unread">
                <a href="#">
                  <div className="actions">
                    <span className="action"><i className="fa fa-square-o"></i></span>
                    <span className="action"><i className="fa fa-star-o"></i></span>
                  </div>
                  <div className="header">
                    <span className="from">V Escribà</span>
                    <span className="date">Hoy, 3:47 PM</span>
                  </div>
                  <div className="title">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                </a>
              </li>
              <li className="message">
                <a href="#">
                  <div className="actions">
                    <span className="action"><i className="fa fa-square-o"></i></span>
                    <span className="action"><i className="fa fa-star-o"></i></span>
                  </div>
                  <div className="header">
                    <span className="from">V Escribà</span>
                    <span className="date">Hoy, 3:47 PM</span>
                  </div>
                  <div className="title">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                </a>
              </li>
              <li className="message">
                <a href="#">
                  <div className="actions">
                    <span className="action"><i className="fa fa-square-o"></i></span>
                    <span className="action"><i className="fa fa-star-o"></i></span>
                  </div>
                  <div className="header">
                    <span className="from">V Escribà</span>
                    <span className="date">Hoy, 3:47 PM</span>
                  </div>
                  <div className="title">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                </a>
              </li>
            </ul>
          </main>
        </div>
      </div>
    )
  }
}

export default Inbox;
