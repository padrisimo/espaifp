import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
  Progress,
} from 'reactstrap';

const propTypes = {
  notif: PropTypes.bool,
  accnt: PropTypes.bool,
  tasks: PropTypes.bool,
  mssgs: PropTypes.bool,
};
const defaultProps = {
  notif: false,
  accnt: false,
  tasks: false,
  mssgs: false,
};

class HeaderDropdown extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  dropNotif() {
    const itemsCount = 5;
    return (
      <Dropdown nav className="d-md-down-none" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
          <i className="icon-bell"></i><Badge pill color="danger">{itemsCount}</Badge>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header tag="div" className="text-center"><strong>Tienes {itemsCount} notificaciones</strong></DropdownItem>
          <DropdownItem><i className="icon-user-follow text-success"></i> Nueva alta de trabajador</DropdownItem>
          <DropdownItem><i className="icon-user-unfollow text-danger"></i> Baja de trajador</DropdownItem>
          <DropdownItem><i className="icon-chart text-info"></i> Listo el Balance de Marzo</DropdownItem>
          <DropdownItem><i className="icon-basket-loaded text-primary"></i> Nuevo Cliente</DropdownItem>
          <DropdownItem><i className="icon-speedometer text-warning"></i> Servidor Sobrecargado</DropdownItem>
          <DropdownItem header tag="div" className="text-center"><strong>Servidores</strong></DropdownItem>
          <DropdownItem>
            <div className="text-uppercase mb-1">
              <small><b>Uso de CPU</b></small>
            </div>
            <Progress className="progress-xs" color="info" value="25"/>
            <small className="text-muted">348 Processes. 1/4 Cores.</small>
          </DropdownItem>
          <DropdownItem>
            <div className="text-uppercase mb-1">
              <small><b>Uso de Memoria</b></small>
            </div>
            <Progress className="progress-xs" color="warning" value={70}/>
            <small className="text-muted">11444GB/16384MB</small>
          </DropdownItem>
          <DropdownItem>
            <div className="text-uppercase mb-1">
              <small><b>SSD de Correo</b></small>
            </div>
            <Progress className="progress-xs" color="danger" value={90}/>
            <small className="text-muted">243GB/256GB</small>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  dropAccnt() {
    return (
      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
          <img src={'img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header tag="div" className="text-center"><strong>Cuenta</strong></DropdownItem>
          <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">30</Badge></DropdownItem>
          <DropdownItem><i className="fa fa-envelope-o"></i> Mensages<Badge color="success">7</Badge></DropdownItem>
          <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
          <DropdownItem><i className="fa fa-comments"></i> Comentarios<Badge color="warning">3</Badge></DropdownItem>
          <DropdownItem header tag="div" className="text-center"><strong>Ajustes</strong></DropdownItem>
          <DropdownItem><i className="fa fa-user"></i> Perfil</DropdownItem>
          <DropdownItem><i className="fa fa-wrench"></i> Ajustes</DropdownItem>
          <DropdownItem><i className="fa fa-usd"></i> Pagos<Badge color="secondary">2</Badge></DropdownItem>
          <DropdownItem><i className="fa fa-file"></i> Projectos<Badge color="primary">4</Badge></DropdownItem>
          <DropdownItem divider/>
          <DropdownItem><i className="fa fa-shield"></i> Bloquear Cuentas</DropdownItem>
          <DropdownItem><i className="fa fa-lock"></i> Salir</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  dropTasks() {
    const itemsCount = 15;
    return (
      <Dropdown nav className="d-md-down-none" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
          <i className="icon-list"></i><Badge pill color="warning">{itemsCount}</Badge>
        </DropdownToggle>
        <DropdownMenu right className="dropdown-menu-lg">
          <DropdownItem header tag="div" className="text-center"><strong>Tienes {itemsCount} tareas pendientes</strong></DropdownItem>
          <DropdownItem>
            <div className="small mb-1">Contratar espacio en Servidores<span
              className="float-right"><strong>0%</strong></span></div>
            <Progress className="progress-xs" color="info" value={0}/>
          </DropdownItem>
          <DropdownItem>
            <div className="small mb-1">Revisar altas <span className="float-right"><strong>25%</strong></span>
            </div>
            <Progress className="progress-xs" color="danger" value={25}/>
          </DropdownItem>
          <DropdownItem>
            <div className="small mb-1">Pedir feedback a clientes <span className="float-right"><strong>50%</strong></span>
            </div>
            <Progress className="progress-xs" color="warning" value={50}/>
          </DropdownItem>
          <DropdownItem>
            <div className="small mb-1">Presentación para la DEMO <span className="float-right"><strong>75%</strong></span>
            </div>
            <Progress className="progress-xs" color="info" value={75}/>
          </DropdownItem>
          <DropdownItem>
            <div className="small mb-1">Probar la nueva App <span className="float-right"><strong>100%</strong></span></div>
            <Progress className="progress-xs" color="success" value={100}/>
          </DropdownItem>
          <DropdownItem className="text-center"><strong>Ver todas las Tareas</strong></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  dropMssgs() {
    const itemsCount = 7;
    return (
      <Dropdown nav className="d-md-down-none" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
          <i className="icon-envelope-letter"></i><Badge pill color="info">{itemsCount}</Badge>
        </DropdownToggle>
        <DropdownMenu right className="dropdown-menu-lg">
          <DropdownItem header tag="div"><strong>Tienes {itemsCount} mensajes</strong></DropdownItem>
          <DropdownItem href="#">
            <div className="message">
              <div className="py-3 mr-3 float-left">
                <div className="avatar">
                  <img src={'img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                  <Badge className="avatar-status" color="success"></Badge>
                </div>
              </div>
              <div>
                <small className="text-muted">Jonatan Fdez</small>
                <small className="text-muted float-right mt-1">Ahora mismo</small>
              </div>
              <div className="text-truncate font-weight-bold"><span className="fa fa-exclamation text-danger"></span> Importante </div>
              <div className="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
              </div>
            </div>
          </DropdownItem>
          <DropdownItem href="#">
            <div className="message">
              <div className="py-3 mr-3 float-left">
                <div className="avatar">
                  <img src={'img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                  <Badge className="avatar-status" color="warning"></Badge>
                </div>
              </div>
              <div>
                <small className="text-muted">Héctor Bohè</small>
                <small className="text-muted float-right mt-1">hace 5 minutos</small>
              </div>
              <div className="text-truncate font-weight-bold">Video Promocional</div>
              <div className="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
              </div>
            </div>
          </DropdownItem>
          <DropdownItem href="#">
            <div className="message">
              <div className="py-3 mr-3 float-left">
                <div className="avatar">
                  <img src={'img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                  <Badge className="avatar-status" color="danger"></Badge>
                </div>
              </div>
              <div>
                <small className="text-muted">Viçens A. Escribà</small>
                <small className="text-muted float-right mt-1">9:52 AM</small>
              </div>
              <div className="text-truncate font-weight-bold">Reunión Mañana</div>
              <div className="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
              </div>
            </div>
          </DropdownItem>
          <DropdownItem href="#">
            <div className="message">
              <div className="py-3 mr-3 float-left">
                <div className="avatar">
                  <img src={'img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                  <Badge className="avatar-status" color="info"></Badge>
                </div>
              </div>
              <div>
                <small className="text-muted">Adrián Fdez</small>
                <small className="text-muted float-right mt-1">4:03 AM</small>
              </div>
              <div className="text-truncate font-weight-bold">Contratar Nuevo Host</div>
              <div className="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
              </div>
            </div>
          </DropdownItem>
          <DropdownItem href="#" className="text-center"><strong>Ver Todos</strong></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  render() {
    const {notif, accnt, tasks, mssgs, ...attributes} = this.props;
    return (
      notif ? this.dropNotif() :
      accnt ? this.dropAccnt() :
      tasks ? this.dropTasks() :
      mssgs ? this.dropMssgs() : null
    );
  }
}

HeaderDropdown.propTypes = propTypes;
HeaderDropdown.defaultProps = defaultProps;

export default HeaderDropdown;
