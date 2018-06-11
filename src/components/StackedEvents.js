import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import moment from 'moment'
import 'moment/locale/de';
import CalendarDisplay from '../components/CalendarDisplay'
import { Carousel } from 'react-responsive-carousel';

moment.locale('de')
const StackedEvents = ({ events }) => (

  <section className="section">
    <div className="container">
      <div className="content">
        <h3 className="has-text-weight-bold is-size-3">Aktuells</h3>
      </div>
      <Carousel showThumbs={false} autoPlay={false} stopOnHover={true} useKeyboardArrows={true}>
        {events
          .filter(post => (post.node.frontmatter.templateKey === 'event-post') && moment(post.node.frontmatter.date).isAfter(moment()))
          .map(({ node: post }) => (
            <div key={post.id}>
              <div
                className="content"
                style={{ border: '1px solid #eaecee' }} >
                <img src={post.frontmatter.bildgross} className="image" />
                <div className="is-overlay">
                  <div className="carousel-title" style={{paddingBottom: '15px'}}>

                    <div className="is-pulled-left" style={{ width: '60%', height: '45px' }}>
                      <h2 className="is-pulled-left" >
                        <Link to={post.fields.slug}>
                          <h5 className="has-text-white">{post.frontmatter.title} 
                          {/* <span className="is-hidden-desktop subtitle is-4 has-text-white">{' ' + moment(post.frontmatter.date).format('DD. MMMM YYYY')}</span> */}
                          </h5>
                        </Link>
                      </h2>
                    </div>
                    <div className="is-pulled-right has-text-right has-text-white is-size-5" style={{ width: '40%', paddingRight: '15px' }} >
                      {moment(post.frontmatter.date).format("DD. MMMM YYYY")} 
                    </div>
                    <div className="is-pulled-left has-text-white has-text-left eventOverlayText" >{post.anriss}</div>
                    <br />
                    <Link className="button is-small is-pulled-right" style={{marginRight: '5px'}} to={post.fields.slug}>
                    mehr →
                  </Link>
                    {/* <div className="carousel-calendar is-pulled-right is-hidden-mobile">
                      <CalendarDisplay className="" displayDate={post.frontmatter.date} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  </section>
)

StackedEvents.propTypes = {
  events: PropTypes.array
}

export default StackedEvents
