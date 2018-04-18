import React, {Component} from 'react';
import { Nav, NavItem, NavLink, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge, Button, ButtonGroup, Form, FormGroup, Input } from 'reactstrap';

class Message extends Component {

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
          <main className="message">
            <div className="toolbar">
              <ButtonGroup>
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
                  <DropdownItem>Estiqueta<Badge color="danger">Personal</Badge></DropdownItem>
                  <DropdownItem>Estiqueta<Badge color="info">Trabajo</Badge></DropdownItem>
                  <DropdownItem>Estiqueta<Badge color="success">Cliente</Badge></DropdownItem>
                  <DropdownItem>Estiqueta<Badge color="warning">Noticia</Badge></DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
            <div className="details">
              <div className="title">La Prueba de Concepto para la app de Android</div>
              <div className="header">
                <img className="avatar" src="img/avatars/7.jpg"/>
                <div className="from">
                  <span>Adrián Fernández Chamizo</span>
                  espai@espaifp.es
                </div>
                <div className="date">hoy, <b>3:47 PM</b></div>
              </div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <blockquote>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </blockquote>
              </div>
              <div className="attachments">
                <div className="attachment">
                  <Badge color="danger">zip</Badge> <b>app.apk</b> <i>(2,5MB)</i>
                  <span className="menu">
                    <a href="#" className="fa fa-search"></a>
                    <a href="#" className="fa fa-share"></a>
                    <a href="#" className="fa fa-cloud-download"></a>
                  </span>
                </div>
                <div className="attachment">
                  <Badge color="info">txt</Badge> <b>leeme.txt</b> <i>(7KB)</i>
                  <span className="menu">
                    <a href="#" className="fa fa-search"></a>
                    <a href="#" className="fa fa-share"></a>
                    <a href="#" className="fa fa-cloud-download"></a>
                  </span>
                </div>
                <div className="attachment">
                  <Badge color="success">xls</Badge> <b>hojadegastos.xls</b> <i>(984KB)</i>
                  <span className="menu">
                    <a href="#" className="fa fa-search"></a>
                    <a href="#" className="fa fa-share"></a>
                    <a href="#" className="fa fa-cloud-download"></a>
                  </span>
                </div>
              </div>
              <form method="post" action="">
                <FormGroup>
                  <Input type="textarea" id="message" name="body" rows="12" placeholder="Click para contestar"></Input>
                </FormGroup>
                <FormGroup>
                  <Button type="submit" color="success">Enviar</Button>
                </FormGroup>
              </form>
            </div>
          </main>
        </div>
      </div>
    )
  }
}

export default Message;
