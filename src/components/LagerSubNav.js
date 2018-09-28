import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const LagerSubNav = ({ }) => (
  <div className="full-width-container">
    <div className="columns is-mobile">
      {/* <div className="column has-text-centered"><Link to="/anmeldung"><p className="button is-primary">Anmeldung</p></Link></div> */}
      <div className="column has-text-centered"><a href="/tagebuch2018"><p className="button is-primary">Tagebuch</p></a></div>
      <div className="column has-text-centered"><Link to="/lager2018team"><p className="button is-primary">Lagerleitung</p></Link></div>
      <div className="column has-text-centered"><a href="/img/Hela_2018_Lagerbuechli.pdf" target="_blank"><p className="button is-primary">Lagerb&uuml;echli</p></a></div>
    </div>
  </div>
)

export default LagerSubNav