import React, {Component} from 'react';
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


class Oferta extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Oferta de Trabajo
              </CardHeader>
              <CardBody>
              <p>Aqui va la oferta con la data que es menester.</p>
              <p>:)</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    )
  }
}

export default Oferta;
