import React from 'react'
import PropTypes from 'prop-types'
import  {  EventPostTemplate } from '../../templates/event-post'

const EventPostPreview = ({ entry, widgetFor }) => (
  <EventPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    sichtbar={entry.getIn(['data', 'sichtbar'])}
    bildgross={entry.getIn(['data', 'bildgross'])}
    anriss={entry.getIn(['data', 'anriss'])}
  />
)

EventPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EventPostPreview
