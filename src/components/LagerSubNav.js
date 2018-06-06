import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const LagerSubNav = ({ }) => (
  <div class="full-width-container">
    <div class="columns is-mobile">
      <div class="column has-text-centered"><Link><a class="button is-primary">Anmeldung</a></Link></div>
      <div class="column has-text-centered"><Link><a class="button is-primary">Tagebuch</a></Link></div>
      <div class="column has-text-centered"><Link><a class="button is-primary">Lagerleitung</a></Link></div>
    </div>
  </div>
)

export default LagerSubNav