import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import moment from 'moment'
import Content, { HTMLContent } from '../components/Content'
import FeatureGrid from '../components/Features';

export const Tagebuch2018PostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  sichtbar,
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
            <div id="divPostContent" className="divPostContent">
            <PostContent content={content} />
            </div>
          </div>
        
        </div>
      </div>
     {/* <FeatureGrid gridItems={galerie.bilder} />  */}
    </section>
  )
}

Tagebuch2018PostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  // galerie: PropTypes.shape({
  //   bilder: PropTypes.array,
  // }),
}

const Tagebuch2018Post = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Tagebuch2018PostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}  
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      // galerie={post.frontmatter.galerie}
    />
  )
}

Tagebuch2018Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
  // galerie: PropTypes.shape({
  //   bilder: PropTypes.array,
  // }),
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
      }
    }
  }
`
