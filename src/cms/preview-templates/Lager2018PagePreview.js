import React from 'react'
import PropTypes from 'prop-types'
import { Lager2018PageTemplate } from '../../templates/lager2018-page'

const Lager2018Preview = ({ entry, widgetFor }) => (
  <Lager2018PageTemplate
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
    content={widgetFor('body')}
  />
)

Lager2018Preview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default Lager2018Preview
