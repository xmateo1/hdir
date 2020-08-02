import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Cards from '../components/Cards'
import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  hero,
  intro,
  poster
}) => (
  <div>
    <section className="relative" style={{height: '90vh'}}>
      <div 
        className="bg-cover bg-right"
        style={{
          backgroundImage: `url(${
            !!hero.image.childImageSharp ? hero.image.childImageSharp.fluid.src : hero.image
          })`,
          filter: "grayscale(100%) brightness(70%)",
          height: "90vh"
        }}
      >
      </div>
      <div className="absolute w-full bottom-0 text-white">
        <div className="m-auto max-w-7xl px-8 py-24">
          <h1 className="max-w-4xl leading-none font-extrabold text-5xl md:text-7xl mb-4">{hero.title}</h1>
          <p className="max-w-4xl text-lg md:text-2xl">{hero.subtitle}</p>
          <p className="my-12"><Link className="btn" to="/">O nama</Link></p>
        </div>
      </div>
    </section>
    <section className="bg-gray py-24">
      <div class="m-auto max-w-7xl px-8 mb-24">
        <h2 className="max-w-xl text-gray-dark font-extrabold text-4xl md:text-6xl leading-none">{intro.title}</h2>
      </div>
      <Cards cards={intro.cards}/>
    </section>
    <section className="bg-gray py-24">
      <div className="relative">
        <Img fluid={poster.image.childImageSharp ? poster.image.childImageSharp.fluid : poster.image} alt="" />
        <svg width="100%" viewBox="0 0 2481 714" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1315.78 713.446C232.229 726.131 -533.553 517.876 -781 412.163C-781 284.316 -41.916 -55.6177 1315.78 7.81025C2401.95 58.5526 2610.54 338.825 2579.06 472.618C2609.45 547.608 2399.34 700.76 1315.78 713.446Z" fill={poster.colors[0].code}/>
          <path d="M1649.51 571.593C641.029 580.903 -71.6973 428.066 -302 350.484C-302 256.658 385.878 7.18255 1649.51 53.7319C2660.42 90.9714 2854.56 296.661 2825.27 394.851C2853.55 449.886 2658 562.283 1649.51 571.593Z" fill={poster.colors[1].code}/>
          <path d="M1514.51 626.705C506.029 633.456 -206.697 522.62 -437 466.359C-437 398.317 250.878 217.4 1514.51 251.157C2525.42 278.162 2719.56 427.327 2690.27 498.533C2718.55 538.444 2523 619.954 1514.51 626.705Z" fill={poster.colors[2].code}/>
        </svg>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  hero: PropTypes.object,
  intro: PropTypes.shape({
    cards: PropTypes.array,
  }),
  poster: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        hero={frontmatter.hero}
        intro={frontmatter.intro}
        poster={frontmatter.poster}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        hero {
          image {
            childImageSharp {
              fluid(maxWidth: 4096, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          subtitle
          title
        }
        intro {
          cards {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          title
        }
        poster {
          colors {
            code
          }
          image {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
