import React, {Component} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Progress, Label, Input} from 'reactstrap';
import classnames from 'classnames';

class Aside extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <aside className="aside-menu">
        <Nav tabs>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                     onClick={() => { this.toggle('1'); }}>
              <i className="icon-list"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                     onClick={() => { this.toggle('2'); }}>
              <i className="icon-speech"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '3' })}
                     onClick={() => { this.toggle('3'); }}>
              <i className="icon-settings"></i>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <div className="callout m-0 py-2 text-muted text-center bg-light text-uppercase">
              <small><b>Hoy</b></small>
            </div>
            <hr className="transparent mx-3 my-0"/>
            <div className="callout callout-warning m-0 py-3">
              <div className="avatar float-right">
                <img src={'img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
              </div>
              <div>Meeting con <strong>Adrián</strong></div>
              <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 1 - 3pm</small>
              <small className="text-muted"><i className="icon-location-pin"></i>&nbsp; Barceloneta</small>
            </div>
            <hr className="mx-3 my-0"/>
            <div className="callout callout-info m-0 py-3">
              <div className="avatar float-right">
                <img src={'img/avatars/8.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
              </div>
              <div>Skype con <strong>Escribà</strong></div>
              <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 4 - 5pm</small>
              <small className="text-muted"><i className="icon-social-skype"></i>&nbsp; On-line</small>
            </div>
            <hr className="transparent mx-3 my-0"/>
            <div className="callout m-0 py-2 text-muted text-center bg-light text-uppercase">
              <small><b>Mañana</b></small>
            </div>
            <hr className="transparent mx-3 my-0"/>
            <div className="callout callout-danger m-0 py-3">
              <div>Nueva App Movil - <strong>deadline</strong></div>
              <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 10 - 11pm</small>
              <small className="text-muted"><i className="icon-home"></i>&nbsp; Espai FP</small>
              <div className="avatars-stack mt-2">
                <div className="avatar avatar-xs">
                  <img src={'img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                </div>
                <div className="avatar avatar-xs">
                  <img src={'img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                </div>
                <div className="avatar avatar-xs">
                  <img src={'img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                </div>
                <div className="avatar avatar-xs">
                  <img src={'img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                </div>
                <div className="avatar avatar-xs">
                  <img src={'img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                </div>
              </div>
            </div>
            <hr className="mx-3 my-0"/>
            <div className="callout callout-success m-0 py-3">
              <div><strong>Startups</strong> Meetup</div>
              <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 1 - 3pm</small>
              <small className="text-muted"><i className="icon-location-pin"></i>&nbsp; Cibernarium, BCN</small>
            </div>
            <hr className="mx-3 my-0"/>
            <div className="callout callout-primary m-0 py-3">
              <div><strong>Reunión del Equipo</strong></div>
              <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 4 - 6pm</small>
              <small className="text-muted"><i className="icon-home"></i>&nbsp; Espai FP</small>
              <div className="avatars-stack mt-2">
                <div className="avatar avatar-xs">
                  <img src={'img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                </div>
                <div className="avatar avatar-xs">
                  <img src={'img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                </div>
                <div className="avatar avatar-xs">
                  <img src={'img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                </div>
                <div className="avatar avatar-xs">
                  <img src={'img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                </div>
                <div className="avatar avatar-xs">
                  <img src={'img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                </div>
                <div className="avatar avatar-xs">
                  <img src={'img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                </div>
                <div className="avatar avatar-xs">
                  <img src={'img/avatars/8.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                </div>
              </div>
            </div>
            <hr className="mx-3 my-0"/>
          </TabPane>
          <TabPane tabId="2" className="p-3">
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Adrián CTO</small>
                <small className="text-muted float-right mt-1">1:10 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">POC del Admin Tool</div>
              <small className="text-muted">Tengo Mockeadas ciertas funcionalidades pero la integracion para crear nuevos trabajadores...
              </small>
            </div>
            <hr/>
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Adrián CTO</small>
                <small className="text-muted float-right mt-1">1:42 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">App Android</div>
              <small className="text-muted">a la Espera de la confirmación para publicar la app en Google Play Store..
              </small>
            </div>
            <hr/>
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Adrián CTO</small>
                <small className="text-muted float-right mt-1">2:32 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">App para IOS</div>
              <small className="text-muted">Un infierto obtener los permisos para el Apple App Store...
              </small>
            </div>
            <hr/>
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Adrián CTO</small>
                <small className="text-muted float-right mt-1">4:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Test de usuario</div>
              <small className="text-muted">Preparo informe de usabilidad de la plataforma para hacer mejoras para la próxima versión del Software...
              </small>              
            </div>
            <hr/>
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Adrián CTO</small>
                <small className="text-muted float-right mt-1">5:23 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Nueva App</div>
              <small className="text-muted">Te adjunto el informe con ideas recogidas por los usuarios para la nueva app, dime como lo ves...
              </small>
            </div>
          </TabPane>
          <TabPane tabId="3" className="p-3">
            <h6>Ajustes</h6>

            <div className="aside-options">
              <div className="clearfix mt-4">
                <small><b>Notificaciones</b></small>
                <Label className="switch switch-text switch-pill switch-success switch-sm float-right">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
              </div>
              <div>
                <small className="text-muted">Recibir notificaciones de cada actividad.
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small><b>Altas en el sistema</b></small>
                <Label className="switch switch-text switch-pill switch-success switch-sm float-right">
                  <Input type="checkbox" className="switch-input"/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
              </div>
              <div>
                <small className="text-muted">Nuevos Trabajadores o Clientes añadidos.  
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small><b>Trabajos Posteados</b></small>
                <Label className="switch switch-text switch-pill switch-success switch-sm float-right">
                  <Input type="checkbox" className="switch-input"/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small><b>TPeticiones de trabajo</b></small>
                <Label className="switch switch-text switch-pill switch-success switch-sm float-right">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
              </div>
            </div>

            <hr/>
            <h6>Uso de los Servidores</h6>

            <div className="text-uppercase mb-1 mt-4">
              <small><b>Uso del CPU</b></small>
            </div>
            <Progress className="progress-xs" color="info" value="25"/>
            <small className="text-muted">348 Processes. 1/4 Cores.</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>USO de Memoria</b></small>
            </div>
            <Progress className="progress-xs" color="warning" value="70"/>
            <small className="text-muted">11444GB/16384MB</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>SSD de Correo</b></small>
            </div>
            <Progress className="progress-xs" color="danger" value="95"/>
            <small className="text-muted">243GB/256GB</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>SSD de Data Laboral</b></small>
            </div>
            <Progress className="progress-xs" color="success" value="10"/>
            <small className="text-muted">25GB/256GB</small>
          </TabPane>
        </TabContent>
      </aside>
    )
  }
}

export default Aside;
