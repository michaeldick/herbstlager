import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import LagerSubNav from '../components/LagerSubNav';

export const Lager2018PageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h2>{title}</h2>
                <div
                  className="full-width-image-container margin-top-0"
                  style={{ backgroundImage: `url(${image})` }}
                >
                </div>
              </div>
              <LagerSubNav></LagerSubNav>
              <h3 className="title is-3">Piraten ahoi!</h3>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Lager2018PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  image: PropTypes.string
}

const Lager2018Page = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Lager2018PageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      content={post.html}
    />
  )
}

export default Lager2018Page

export const lager2018PageQuery = graphql`
  query Lager2018Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image
      }
    }
  }
`
