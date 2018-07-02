import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const LagerSubNav = ({ }) => (
  <div className="full-width-container">
    <div className="columns is-mobile">
      <div className="column has-text-centered"><Link to="/anmeldung"><p className="button is-primary">Anmeldung</p></Link></div>
      <div className="column has-text-centered"><Link to="/#"><p className="button is-primary">Tagebuch</p></Link></div>
      <div className="column has-text-centered"><Link to="/lagerleitung2018"><p className="button is-primary">Lagerleitung</p></Link></div>
    </div>
  </div>
)

export default LagerSubNav