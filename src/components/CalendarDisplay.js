import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/de';
import styles from './CalendarDisplay.module.css'
console.log(styles);

moment.locale('de')
const CalendarDisplay = ({ displayDate }) => (

  <div className={styles.time}>
    <em>{moment(displayDate).format('dddd')}</em>
    <strong>{moment(displayDate).format('MMMM')}</strong>
    <span>{moment(displayDate).format('DD')}</span>
  </div>
)

CalendarDisplay.propTypes = {
  displayDate: PropTypes.string
}

export default CalendarDisplay
