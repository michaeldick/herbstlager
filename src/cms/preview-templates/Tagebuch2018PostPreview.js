import React from 'react'
import PropTypes from 'prop-types'
import  {  Tagebuch2018PostTemplate } from '../../templates/tagebuch2018-post'

const Tagebuch2018PostPreview = ({ entry, widgetFor }) => (
  <Tagebuch2018PostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    sichtbar={entry.getIn(['data', 'sichtbar'])}
  />
)

Tagebuch2018PostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default Tagebuch2018PostPreview
