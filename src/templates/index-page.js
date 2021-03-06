import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Cards from '../components/Cards'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SmallCards from '../components/SmallCards'

export const IndexPageTemplate = ({
  hero,
  intro,
  membership,
  poster
}) => {
  return (
  <div>
    <Hero hero={ hero } />
    <section className="bg-gray-200 py-24">
      <div className="limit">
        <h2 className="max-w-xl text-gray-600 font-extrabold text-4xl md:text-6xl leading-none">{intro.title}</h2>
      </div>
      <Cards cards={intro.cards} className="hidden md:block mt-12 md:mt-24"/>
      <SmallCards cards={intro.cards} className="md:hidden mt-12 md:mt-24"/>
    </section>
    <section className="bg-gray-200 pb-12">
      <div className="relative">
        <div 
          className="limit"
          style={{
            padding: "5vw 0"
          }}
        >
          <img className="z-40 relative" alt="" src={`${!!poster.image.childImageSharp ? poster.image.childImageSharp.fluid.src : poster.image}`}/>
          <div className="text-right mt-6 px-4 xl:px-0">
            <Link className="btn relative z-40" to="/">Prijavi se</Link>
          </div>
        </div>
        <svg className="absolute top-0" width="100%" viewBox="0 0 2481 714" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1315.78 713.446C232.229 726.131 -533.553 517.876 -781 412.163C-781 284.316 -41.916 -55.6177 1315.78 7.81025C2401.95 58.5526 2610.54 338.825 2579.06 472.618C2609.45 547.608 2399.34 700.76 1315.78 713.446Z" fill={poster.colors[0].code}/>
          <path d="M1649.51 571.593C641.029 580.903 -71.6973 428.066 -302 350.484C-302 256.658 385.878 7.18255 1649.51 53.7319C2660.42 90.9714 2854.56 296.661 2825.27 394.851C2853.55 449.886 2658 562.283 1649.51 571.593Z" fill={poster.colors[1].code}/>
          <path d="M1514.51 626.705C506.029 633.456 -206.697 522.62 -437 466.359C-437 398.317 250.878 217.4 1514.51 251.157C2525.42 278.162 2719.56 427.327 2690.27 498.533C2718.55 538.444 2523 619.954 1514.51 626.705Z" fill={poster.colors[2].code}/>
        </svg>
      </div>
    </section>
    <section className="relative" style={{height: "36rem"}}>
      <div 
        className="bg-cover h-full"
        style={{
          backgroundImage: `url(${
            !!membership.image.childImageSharp ? membership.image.childImageSharp.fluid.src : membership.image
          })`,
          filter: "grayscale(100%)",
        }}
      >
      </div>
      <div className="absolute top-0 w-full py-24">
        <div className="limit">
          <h2 className="max-w-md mb-6 text-gray-600 font-extrabold text-4xl md:text-6xl leading-none">Kako se učlaniti</h2>
          <div className="text-gray-600 text-lg">
          <p>Za članstvo je potrebno:</p>
          <ul className="list-disc">
            <li>ispuniti prijavnicu</li>
            <li>poslati dokaz uplate za godišnju članarinu</li>
          </ul>
          <Link className="btn mt-6" to="/membership">Postani član</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
)}

IndexPageTemplate.propTypes = {
  hero: PropTypes.object,
  intro: PropTypes.shape({
    cards: PropTypes.array,
  }),
  membership: PropTypes.object,
  poster: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        hero={frontmatter.hero}
        intro={frontmatter.intro}
        membership={frontmatter.membership}
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
          link {
            title
            page
          }
        }
        intro {
          cards {
            focus
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
        membership {
          image {
            childImageSharp {
              fluid(maxWidth: 4096, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
