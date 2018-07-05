import React from 'react'
import PropTypes from 'prop-types'
import Mitglieder from '../components/Mitglieder'

export const Lager2018TeamPageTemplate = ({
  title,
  team
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <Mitglieder gridItems={team.mitglieder} />
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

Lager2018TeamPageTemplate.propTypes = {
  title: PropTypes.string,
  team: PropTypes.shape({
    mitglieder: PropTypes.array,
  })
}

const Lager2018TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Lager2018TeamPageTemplate
      title={frontmatter.title}
      team={frontmatter.team}
    />
  )
}

Lager2018TeamPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Lager2018TeamPage

export const Lager2018TeamPageQuery = graphql`
  query Lager2018TeamPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        team {
          mitglieder {
            image
            name
          }
        }
      }
    }
  }
`
