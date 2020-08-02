import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  hero,

  image,
  heading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <section className="relative" style={{height: '90vh'}}>
      <div 
        className="bg-cover bg-right"
        style={{
          filter: "grayscale(100%) brightness(70%)", 
          backgroundImage: `url(${
            !!hero.image.childImageSharp ? hero.image.childImageSharp.fluid.src : hero.image
          })`,
          height: "90vh"
        }}
      >
      </div>
      <div class="absolute w-full bottom-0 text-white">
        <div className="m-auto max-w-7xl px-8 py-24">
          <h1 className="max-w-4xl leading-none font-extrabold text-5xl md:text-7xl mb-4">{hero.title}</h1>
          <p className="max-w-4xl text-lg md:text-2xl">{hero.subtitle}</p>
          <p className="my-12"><Link className="btn" to="/">O nama</Link></p>
        </div>
      </div>
    </section>
    <section className="bg-gray py-24">
      <div class="m-auto max-w-7xl px-8 mb-24">
        <h2 className="max-w-xl text-gray-dark font-extrabold text-4xl md:text-6xl leading-none">Glavni ciljevi društva</h2>
      </div>
      <div className="flex mb-24">
        <div 
          className="bg-cover bg-right h-72 shadow"
          style={{
            filter: "grayscale(100%)",
            backgroundImage: `url(${
              !!hero.image.childImageSharp ? hero.image.childImageSharp.fluid.src : hero.image
            })`,
            width: "55vw"
          }}
        ></div>
        <div className="bg-white w-80 h-72 rounded-r-lg shadow">
          <p className="p-6 text-xl text-gray-dark">poticanje znanstvenog i stručnog rada na području medicine, biologije, biokemije i srodnih znanstvenih područja vezanih uz istraživanje raka</p>
        </div>
      </div>
      <div className="flex mb-24 justify-end">
        <div className="bg-white w-80 h-72 rounded-l-lg shadow">
          <p className="p-6 text-xl text-gray-dark">povezivanje kliničkih i bazičnih aspekata istraživanja raka</p>
        </div>
        <div 
          className="bg-cover bg-right h-72 shadow"
          style={{
            filter: "grayscale(100%)",
            backgroundImage: `url(${
              !!hero.image.childImageSharp ? hero.image.childImageSharp.fluid.src : hero.image
            })`,
            width: "55vw"
          }}
        ></div>
      </div>
      <div className="flex mb-24">
        <div 
          className="bg-cover bg-right h-72 shadow"
          style={{
            filter: "grayscale(100%)",
            backgroundImage: `url(${
              !!hero.image.childImageSharp ? hero.image.childImageSharp.fluid.src : hero.image
            })`,
            width: "55vw"
          }}
        ></div>
        <div className="bg-white w-80 h-72 rounded-r-lg shadow">
          <p className="p-6 text-xl text-gray-dark">unapređivanje i poboljšavanje komunikacije među različitim grupama poticanjem multidisciplinarnih programa</p>
        </div>
      </div>
      <div className="flex mb-24 justify-end">
        <div className="bg-white w-80 h-72 rounded-l-lg shadow">
          <p className="p-6 text-xl text-gray-dark">poticanje inicijativa za istraživačke programe od posebnog značaja za područje raka</p>
        </div>
        <div 
          className="bg-cover bg-right h-72 shadow"
          style={{
            filter: "grayscale(100%)",
            backgroundImage: `url(${
              !!hero.image.childImageSharp ? hero.image.childImageSharp.fluid.src : hero.image
            })`,
            width: "55vw"
          }}
        ></div>
      </div>
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
        >
          {hero.title}
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
          {hero.subtitle}
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
                    <h1 className="title">{mainpitch.title}</h1>
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
                <Features gridItems={intro.blurbs} />
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
  heroTitle: PropTypes.string,

  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        hero={frontmatter.hero}

        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          subtitle
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
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
