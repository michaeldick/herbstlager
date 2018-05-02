import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo_neu_neu_neu.png'

class NavbarNew extends React.Component {
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
      <nav class="navbar is-primary">
        <div class="navbar-brand">
        <Link to="/" className="navbar-item">
              <figure className="image" style={{ width: 160 + 'px' }}>
                <img src={logo} alt="Kaldi" style={{ maxHeight: '100%' }} />
              </figure>
            </Link>
          <div className={"navbar-burger " + (this.state.navToggle ? "is-active" : "")}
              onClick={this.toggleNav}  data-target="navbarExampleTransparentExample" style={{ width: 6.25 + 'rem'}}>
            <i className="fa fa-bars has-text-white" style={{ fontSize: 64 + 'pt'}}></i>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className={"navbar-menu " + (this.state.navToggle ? "is-active" : "")}>
          <div class="navbar-start has-text-centered is-size-5 has-text-weight-bold">
            <Link className="navbar-item" to="/event" onClick={this.toggleNav}>
                <p className="has-text-black"><i className="fa fa-calendar"></i>
                  <br />Agenda</p>
              </Link>
              <Link className="navbar-item" to="/anmeldung" onClick={this.toggleNav}>
                <p className="has-text-black"><i className="fa fa-file-text-o"></i>
                  <br />Anmeldung</p>
              </Link>
              <Link className="navbar-item" to="/about" onClick={this.toggleNav}>
                <p className="has-text-black"><i className="fa fa-info"></i>
                  <br />About</p>
              </Link>
              <Link className="navbar-item" to="/contact" onClick={this.toggleNav}>
                <p className="has-text-black"><i className="fa fa-envelope"></i>
                  <br />Kontakt</p>
              </Link>
              <Link className="navbar-item" to="/products" onClick={this.toggleNav}>
                <p className="has-text-black"><i className="fa fa-question"></i>
                  <br />Products</p>
              </Link>
              </div>
            </div>
      </nav>
    )
  }
}
export default NavbarNew