import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import moment from 'moment'
import Content, { HTMLContent } from '../components/Content'

export const Tagebuch2018PostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  sichtbar,
  bildgross,
  date,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="has-text-primary title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
          </div>
          <div className="column" style={{width: '75px'}}> {moment(date).format("DD. MMMM YYYY")} </div>
        </div>
      </div>
    </section>
  )
}

Tagebuch2018PostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const Tagebuch2018Post = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Tagebuch2018PostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Event`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      date={post.frontmatter.date}
    />
  )
}

Tagebuch2018Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Tagebuch2018Post

export const pageQuery = graphql`
  query Tagebuch2018PostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        sichtbar
        bildgross
        title
        description
        tags
        anriss
      }
    }
  }
`
