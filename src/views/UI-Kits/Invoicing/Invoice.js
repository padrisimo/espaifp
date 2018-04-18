import React, {Component} from 'react';
import { Card, CardHeader, CardBody, Row, Col, Table } from 'reactstrap';


class Invoice extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            Factura <strong>#90-98792</strong>
            <a href="#" className="btn btn-sm btn-info float-right"><i className="fa fa-print"></i> Imprimir</a>
            <a href="#" className="btn btn-sm btn-info float-right"><i className="fa fa-save"></i> Guardar</a>
          </CardHeader>
          <CardBody>
            <Row className="mb-4">
              <Col sm="4">
                <h6 className="mb-3">De:</h6>
                <div><strong>Espai FP</strong></div>
                <div>San Pere mes Baix</div>
                <div>08003, Barcelona</div>
                <div>Email: espai@espaifp.es</div>
                <div>Telefono: 900 000 000</div>
              </Col>
              <Col sm="4">
              <h6 className="mb-3">Para:</h6>
                <div><strong>Palau Alòs</strong></div>
                <div>San Pere mes Baix</div>
                <div>08003, Barcelona</div>
                <div>Email: palau@alos.cat</div>
                <div>Telefono: 900 000 000</div>
              </Col>
              <Col sm="4">
                <h6 className="mb-3">Detalles:</h6>
                <div>Invoice <strong>#90-98792</strong></div>
                <div>Abril 20, 2018</div>
                <div>CIF: PL9877281777</div>
                <div>Cuenta: Palau Alòs</div>
                <div><strong>IBAN: 99 8888 7777 6666 5555</strong></div>
              </Col>
            </Row>
            <Table striped responsive>
              <thead>
                <tr>
                  <th className="center">#</th>
                  <th>Concepto</th>
                  <th>Descripción</th>
                  <th className="center">Horas</th>
                  <th className="right">Preu/H</th>
                  <th className="right">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="center">1</td>
                  <td className="left">Montar Muebles</td>
                  <td className="left">Escenario y Sala de Musica</td>
                  <td className="center">40</td>
                  <td className="right">10€</td>
                  <td className="right">400€</td>
                </tr>
                <tr>
                  <td className="center">2</td>
                  <td className="left">Limpieza</td>
                  <td className="left">Limpieza despues de actividad</td>
                  <td className="center">2</td>
                  <td className="right">10€</td>
                  <td className="right">20€</td>
                </tr>
              </tbody>
            </Table>
            <Row>
              <Col lg="4" sm="5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </Col>
              <Col lg="4" sm="5" className="ml-auto">
                <Table className="table-clear">
                  <tbody>
                    <tr>
                      <td className="left"><strong>Subtotal</strong></td>
                      <td className="right">420 €</td>
                    </tr>
                    <tr>
                      <td className="left"><strong>Discount (10%)</strong></td>
                      <td className="right">42 €</td>
                    </tr>
                    <tr>
                      <td className="left"><strong>IVA (0%)</strong></td>
                      <td className="right">0000 €</td>
                    </tr>
                    <tr>
                      <td className="left"><strong>Total</strong></td>
                      <td className="right"><strong>378 €</strong></td>
                    </tr>
                  </tbody>
                </Table>
                <a href="#" className="btn btn-success"><i className="fa fa-usd"></i> Pagar</a>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default Invoice;
