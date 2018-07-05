import React from 'react'
import PropTypes from 'prop-types'
import { Lager2018TeamPageTemplate } from '../../templates/lager2018team-page'

const Lager2018TeamPagePreview = ({ entry, getAsset }) => {
  const entryTeam = entry.getIn(['data', 'team', 'mitglieder'])
  const team = entryTeam ? entryTeam.toJS() : []

  return (
    <Lager2018TeamPageTemplate
      title={entry.getIn(['data', 'title'])}
      team={{ team }}
    />
  )
}

Lager2018TeamPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default Lager2018TeamPagePreview
