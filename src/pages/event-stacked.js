import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import CalendarDisplay from '../components/CalendarDisplay'
import { Carousel } from 'react-responsive-carousel';
import moment from 'moment/moment';

export default class EventStackedPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Agenda</h1>
          </div>
          <Carousel showThumbs={false}>
            {posts
              .filter(post => post.node.frontmatter.templateKey === 'event-post')
              .map(({ node: post }) => (
                <div key={post.id}>
                  <div
                    className="content"
                    style={{ border: '1px solid #eaecee' }} >
                    <img src={post.frontmatter.bildgross} />
                    <div className="is-overlay">
                      <div className="carousel-title" style={{}}>

                        <div className="is-pulled-left" style={{ width: '100%' }}><h2 className="is-pulled-left" ><Link  to={post.fields.slug}>
                          <h5 className="has-text-white">{post.frontmatter.title} <span className="is-hidden-desktop">{'am ' + moment(post.frontmatter.date).format('DD.MM.YYYY')}</span></h5>
                        </Link>
                        </h2></div>
                        <div className="is-pulled-left has-text-white">{post.excerpt}</div>
                        <br />
                        <div className="carousel-calendar is-pulled-right is-hidden-mobile">
                          <CalendarDisplay className="" displayDate={post.frontmatter.date} /></div>
                      </div>
                    </div>
                  </div></div>
              ))}
          </Carousel>
        </div>
      </section>
    )
  }
}

EventStackedPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query EventStackedQuery {
    allMarkdownRemark(filter: {sichtbar: {eq: true}}, sort: {order: ASC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            bildgross
            sichtbar
          }
        }
      }
    }
  }
`
