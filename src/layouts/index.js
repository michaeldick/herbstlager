import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import NavbarNew from '../components/NavbarNew'

import 'font-awesome/css/font-awesome.css';
import './all.sass'



const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Herbstlager Niederbuchsiten" />
    <NavbarNew />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
