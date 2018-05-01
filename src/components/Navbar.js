import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo_neu_neu_neu.png'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navToggle: false
    };
    
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({ navToggle: !this.state.navToggle });
    console.log(this.state.navToggle);
  }

  render() {
    return (
      <nav className="navbar is-transparent" style={{ height: '140px', zIndex:2 }}>
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image" style={{ width: 160 + 'px' }}>
                <img src={logo} alt="Kaldi" style={{ maxHeight: '100%' }} />
              </figure>
            </Link>
            <a role="button" className={"navbar-burger " + (this.state.navToggle ? "is-active" : "")}
              onClick={this.toggleNav} aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={"navbar-menu " + (this.state.navToggle ? "is-active" : "")} >
            <div className="navbar-start has-text-centered is-size-5 has-text-weight-bold">
              <Link className="navbar-item is-mobile" to="/event">
                <p className="has-text-white"><i className="fa fa-calendar"></i>
                  <br />Agenda</p>
              </Link>
              <Link className="navbar-item" to="/anmeldung">
                <p className="has-text-white"><i className="fa fa-file-text-o"></i>
                  <br />Anmeldung</p>
              </Link>
              <Link className="navbar-item" to="/about">
                <p className="has-text-white"><i className="fa fa-info"></i>
                  <br />About</p>
              </Link>
              <Link className="navbar-item" to="/contact">
                <p className="has-text-white"><i className="fa fa-envelope"></i>
                  <br />Kontakt</p>
              </Link>
              <Link className="navbar-item" to="/products">
                <p className="has-text-white"><i className="fa fa-question"></i>
                  <br />Products</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
export default Navbar