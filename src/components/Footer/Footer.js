import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <span><a href="http://espaifp.es/" target="_blank">Espai FP</a> &copy; 2018 Espai FP Admin Tool</span>
        <span className="ml-auto">Powered by <a href="https://github.com/padrisimo" target="_blank">padrisimo</a></span>
      </footer>
    )
  }
}

export default Footer;
