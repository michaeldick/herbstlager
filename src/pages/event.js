import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import moment from 'moment'
import CalendarDisplay from '../components/CalendarDisplay'

export default class EventPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Agenda</h1>
          </div>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'event-post')
            .map(({ node: post }) => (
              <div key={post.id}>
                <div
                  className="content"
                  style={{ border: '1px solid #eaecee', padding: '2em 4em', width: '800px' }} >
                  <img src={post.frontmatter.bildgross} />
                  <p>
                    <Link className="has-text-primary title is-size-4 " to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>

                    <p className="is-size-6 pull-right">  {moment(post.frontmatter.date).format("DD. MMMM YYYY")}</p>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Weiterlesen  →
                  </Link>
                  </p>
                </div>
                <br />
              </div>

            ))}
        </div>
      </section>
    )
  }
}

EventPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query EventQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
            sichtbar
            bildgross
          }
        }
      }
    }
  }
`
