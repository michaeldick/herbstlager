import React from 'react'
import PropTypes from 'prop-types'

const MitgliederGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.name} className="column">
        <div className="divTeamImage image is-128x128" style={{backgroundImage: 'url(' + item.image + ')'}}></div>
          {/* <img alt="" src={item.image} className="image is-128x128" /> */}
          <p className="has-text-centered">  {item.name}
        </p>
        <p>{item.text}</p>
      </div>
    ))}
  </div>
)

MitgliederGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default MitgliederGrid
