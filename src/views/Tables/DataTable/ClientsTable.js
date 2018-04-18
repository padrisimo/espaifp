import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { BootstrapTable, TableHeaderColumn, ClearSearchButton } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import data from './_clientes';



class ClientsTable extends Component {
  constructor(props) {
    super(props);

    this.table = data.rows;
    this.options = {
      sortIndicator: true,
      hideSizePerPage: true,
      paginationSize: 3,
      hidePageListOnlyOnePage: true,
      clearSearch: true,
      alwaysShowAllBtns: false,
      withFirstAndLast: false,
      clearSearchBtn: this.createCustomClearButton
    }

  }
  createCustomClearButton() {
    return (
      <ClearSearchButton
        btnText='Borrar'
      />
    );
  }

  imageFormatter(cell, row){
    return <img src={cell} /> ;
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="icon-menu"></i>Clientes
          </CardHeader>
          <CardBody>
            <BootstrapTable data={this.table} version="4" striped hover pagination search searchPlaceholder={"buscar"} options={this.options} containerStyle={{overflowX: 'scroll'}}>
              <TableHeaderColumn dataField="name" dataSort>Nombre</TableHeaderColumn>
              <TableHeaderColumn dataField="barrio" dataSort>Barrio</TableHeaderColumn>
              <TableHeaderColumn isKey width='20%' dataField="email">Email</TableHeaderColumn>
              <TableHeaderColumn dataField="phone">Teléfono</TableHeaderColumn>
              <TableHeaderColumn dataField="ofertas" width='12%' dataSort>Nº de Ofertas</TableHeaderColumn>
              <TableHeaderColumn dataField="balance" dataSort>Gasto en €</TableHeaderColumn>
            </BootstrapTable>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ClientsTable;
