import React from 'react'
import PropTypes from 'prop-types'

const MitgliederGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.image} className="column">
        <section className="section">
          <p className="has-text-centered">
            <img alt="" src={item.image} />
            <br />
            {item.name}
          </p>
          <p>{item.text}</p>
        </section>
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
