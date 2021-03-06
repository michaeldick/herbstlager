import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import StackedEvents from '../components/StackedEvents';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <StackedEvents events={posts} />
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(filter:{frontmatter:{sichtbar:{eq:true}}}, sort: {order: ASC, fields: [frontmatter___date] }) {
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
            anriss
            sichtbar
          }
        }
      }
    }
  }
`