import React from 'react'
import PropTypes from 'prop-types'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import LagerSubNav from '../components/LagerSubNav'
import Pricing from '../components/Pricing'

export const Lager2018PageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{ backgroundImage: `url(${image})` }}
              >
                <h2
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: '0.5rem 0 0 #009900, -0.5rem 0 0 #009900',
                    backgroundColor: '#009900',
                    color: 'white',
                    padding: '1rem',
                  }}
                >
                  {title}
                </h2>
              </div>
              <LagerSubNav />
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
              </div>
               {/* <Features gridItems={intro.blurbs} /> */}
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

Lager2018PageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.object,
    image2: PropTypes.object,
    image3: PropTypes.object,
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const Lager2018Page = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Lager2018PageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      intro={frontmatter.intro}
      main={frontmatter.main}
      testimonials={frontmatter.testimonials}
      fullImage={frontmatter.full_image}
      pricing={frontmatter.pricing}
    />
  )
}

Lager2018Page.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Lager2018Page

export const lager2018PageQuery = graphql`
  query Lager2018Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        heading
        description
        intro {
          blurbs {
            image
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        testimonials {
          author
          quote
        }
        full_image
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
