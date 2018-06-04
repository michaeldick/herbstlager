import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import CalendarDisplay from '../components/CalendarDisplay'
import { Carousel } from 'react-responsive-carousel';
import moment from 'moment/moment';
import StackedEvents from '../components/StackedEvents';

export default class EventStackedPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <StackedEvents events={posts} />
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
    allMarkdownRemark(filter:{frontmatter:{sichtbar:{eq:true}}}, sort: {order: ASC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 600)
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