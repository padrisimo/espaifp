import React, { Component } from 'react';
import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';


class Ofertas extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Ofertas Activas
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Cliente</th>
                      <th>Fecha Registro</th>
                      <th>Tipo</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Francesc Risalde</td>
                      <td>2018/04/01</td>
                      <td>Jardinería</td>
                      <td>
                        <a href="#/oferta">
                          <Badge color="success">Abierta</Badge>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Joaquin Perez</td>
                      <td>2018/04/07</td>
                      <td>Mudanza</td>
                      <td>
                        <Badge color="danger">Cerrada</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Chetan Mohamed</td>
                      <td>2018/04/01</td>
                      <td>Pintura</td>
                      <td>
                        <Badge color="secondary">Suspendida</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Derick Maximinus</td>
                      <td>2018/04/09</td>
                      <td>Limpieza</td>
                      <td>
                        <Badge color="warning">Cerrando...</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Matilda Martí</td>
                      <td>2018/04/21</td>
                      <td>Fontanería</td>
                      <td>
                        <Badge color="success">Abierta</Badge>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink previous href="#/tables/ofertas"></PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#/tables/ofertas">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#/tables/ofertas">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#/tables/ofertas">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#/tables/ofertas">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next href="#/tables/ofertas"></PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Ofertas Pasadas
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Cliente</th>
                      <th>Finalización</th>
                      <th>Trabajador/es</th>
                      <th>Valorción</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Pedro Piñera</td>
                      <td>2018/04/01</td>
                      <td>Said Iram</td>
                      <td>
                        <Badge color="success">Buena</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Juan Jimenez</td>
                      <td>2018/04/07</td>
                      <td>Jacobo Sanchez</td>
                      <td>
                        <Badge color="danger">Mala</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Chetan Mohamed</td>
                      <td>2018/04/01</td>
                      <td>Laura Lamuño</td>
                      <td>
                        <Badge color="success">Buena</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Derick Maximinus</td>
                      <td>2018/04/09</td>
                      <td>Soraya Sainz</td>
                      <td>
                        <Badge color="warning">Regulera</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Matilda Martí</td>
                      <td>2012/01/21</td>
                      <td>Josep Roser</td>
                      <td>
                        <Badge color="success">Buena</Badge>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink previous href="#/tables/ofertas"></PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#/tables/ofertas">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#/tables/ofertas">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#/tables/ofertas">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#/tables/ofertas">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next href="#/tables/ofertas"></PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    )
  }
}

export default Ofertas;
