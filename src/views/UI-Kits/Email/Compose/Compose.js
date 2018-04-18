import React, {Component} from 'react';
import { Nav, NavItem, NavLink, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge, Button, ButtonGroup, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

class Compose extends Component {

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
        <div className="email-app">
          <nav>
            <a href="#/ui-kits/email/compose" className="btn btn-danger btn-block">Nuevo Email</a>
            <Nav>
              <NavItem>
                <NavLink href="#/ui-kits/email/inbox"><i className="fa fa-inbox"></i> Entrada <Badge color="danger">4</Badge></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><i className="fa fa-star"></i> Favorito</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><i className="fa fa-rocket"></i> Enviado</NavLink>
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
          <main>
            <p className="text-center">Nuevo</p>
            <Form>
              <FormGroup row className="mb-3">
                {/* strange reactstrap sizing for Label: className="col-2 col-sm-1 col-form-label" */}
                <Label for="to" xs={2} sm={1}>To:</Label>
                <Col xs={10} sm={11}>
                  <Input type="email" id="to" placeholder="email"/>
                </Col>
              </FormGroup>
              <FormGroup row className="mb-3">
                <Label for="cc" xs={2} sm={1}>CC:</Label>
                <Col xs={10} sm={11}>
                  <Input type="email" id="cc" placeholder="email"/>
                </Col>
              </FormGroup>
              <FormGroup row className="mb-3">
                <Label for="bcc" xs={2} sm={1}>BCC:</Label>
                <Col xs={10} sm={11}>
                  <Input type="email" id="bcc" placeholder="email"/>
                </Col>
              </FormGroup>
            </Form>
            <Row>
              <Col sm={11} className="ml-auto">
                <div className="toolbar" role="toolbar">
                  <ButtonGroup>
                    <Button color="light"><span className="fa fa-bold"></span></Button>
                    <Button color="light"><span className="fa fa-italic"></span></Button>
                    <Button color="light"><span className="fa fa-underline"></span></Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button color="light"><span className="fa fa-align-left"></span></Button>
                    <Button color="light"><span className="fa fa-align-right"></span></Button>
                    <Button color="light"><span className="fa fa-align-center"></span></Button>
                    <Button color="light"><span className="fa fa-align-justify"></span></Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button color="light"><span className="fa fa-indent"></span></Button>
                    <Button color="light"><span className="fa fa-outdent"></span></Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button color="light"><span className="fa fa-list-ul"></span></Button>
                    <Button color="light"><span className="fa fa-list-ol"></span></Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button color="light"><span className="fa fa-trash-o"></span></Button>
                    <Button color="light"><span className="fa fa-paperclip"></span></Button>
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                      <DropdownToggle caret color="light">
                        <span className="fa fa-tags"></span>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>add label<Badge color="danger">Home</Badge></DropdownItem>
                        <DropdownItem>add label<Badge color="info">Job</Badge></DropdownItem>
                        <DropdownItem>add label<Badge color="success">Clients</Badge></DropdownItem>
                        <DropdownItem>add label<Badge color="warning">News</Badge></DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </ButtonGroup>
                </div>
                <FormGroup className="mt-4">
                  <Input type="textarea" id="message" name="body" rows="12" placeholder="Click para escribir"></Input>
                </FormGroup>
                <FormGroup>
                  <Button type="submit" color="success">Enviar</Button>
                  <Button type="submit" color="light">Borrador</Button>
                  <Button type="submit" color="danger">Descartar</Button>
                </FormGroup>
              </Col>
            </Row>
          </main>
        </div>
      </div>
    )
  }
}

export default Compose;
