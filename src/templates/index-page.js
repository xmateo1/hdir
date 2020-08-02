import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Cards from '../components/Cards'
import BlogRoll from '../components/BlogRoll'
import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  hero,
  intro,

  image,
  heading,
  mainpitch,
  description,
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
    <div
      className="hidden full-width-image margin-top-0"
      style={{
        filter: "grayscale(100%) brightness(80%)", 
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        height: "80vh"
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '200px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="text-4xl font-black"
          style={{
            lineHeight: '1',
            padding: '0.25em',
          }}
        >a
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          a
        </h3>
      </div>
    </div>
    <section className="hidden section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="tiHetle">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  hero: PropTypes.object,
  intro: PropTypes.shape({
    cards: PropTypes.array,
  }),
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        hero={frontmatter.hero}
        intro={frontmatter.intro}

        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
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
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
      }
    }
  }
`
