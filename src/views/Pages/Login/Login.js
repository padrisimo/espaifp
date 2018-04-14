import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import {withRouter} from 'react-router-dom';


class Login extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <h1>Acceso</h1>
                    <p className="text-muted">Accede con tu cuenta</p>
                    <InputGroup className="mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-user"></i>
                        </span>
                      </div>
                      <Input type="text" placeholder="nombre"/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-lock"></i>
                        </span>
                      </div>
                      <Input type="password" placeholder="contraseña"/>
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="success" onClick={()=> this.props.history.push('/dashboard')} className="px-4">Accede</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">Has olvidado...?</Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card className="text-white bg-success py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Espai FP</h2>
                      <p>Herramienta de Administración</p>
                      <Button color="success" className="mt-3" onClick={()=> {window.location = 'http://espaifp.es/'}} active>Contacto</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Login);
