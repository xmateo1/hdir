import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link} from 'gatsby'

import eacr from '../img/eacr.png'

import Cards from '../components/Cards'
import Layout from '../components/Layout'
import SmallCards from '../components/SmallCards'

export const AboutPageTemplate = ({ goals, hero, membership, title }) => {
  return (
    <div className="bg-gray-200">
      <section className="relative" style={{ height: "40rem" }}>
        <div 
          className="bg-cover h-full"
          style={{
            backgroundPosition: "64% 50%",
            backgroundImage: `url(${
              !!hero.image.childImageSharp ? hero.image.childImageSharp.fluid.src : hero.image
            })`,
            filter: "grayscale(100%) brightness(70%)",
          }}
        >
        </div>
        <div className="absolute w-full bottom-0 text-white">
          <div className="limit pt-24 pb-48">
            <p className="max-w-4xl text-lg uppercase mb-2">{title}</p>
            <h1 className="max-w-4xl leading-none font-extrabold text-4xl md:text-6xl lg:text-7xl mb-4">{hero.title}</h1>
            <p className="max-w-4xl text-lg md:text-2xl">{hero.subtitle}</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-200 py-24">
        <div className="limit text-gray-600 md:flex">
          <h2 className="font-extrabold text-5xl md:w-1/2 md:pr-6 leading-tight" style={{ position: "relative", top: "-0.2em" }}>Dio Europskog društva za istraživanje raka</h2>
          <p className="text-xl md:w-1/2">Društvo djeluje kao nacionalno društvo u sklopu Europskog društva za istraživanje raka (European Association for Cancer Research, EACR). EACR djeluje preko 50 godina i najjača je europska neprofitna stručna organizacija koja pokriva kliničke i bazične aspekte istraživanja raka. Danas ima oko 10.000 članova iz preko 90 zemalja iz cijelog svijeta. Članstvo EACR-a čine individualni članovi i nacionalna društva. Iz Hrvatske je u tom Društvu registrirano preko 200 članova.</p>
        </div>
      </section>
      <section className="bg-gray-200 py-24">
        <div className="limit">
          <h2 className="max-w-xl text-gray-600 font-extrabold text-4xl md:text-6xl leading-none">{goals.title}</h2>
        </div>
        <Cards cards={goals.cards} className="hidden md:block mt-12 md:mt-24"/>
        <SmallCards cards={goals.cards} className="md:hidden mt-12 md:mt-24"/>
      </section>
      <section className="bg-gray-200 py-12">
        <div className="limit text-gray-600 md:flex">
          <p className="text-xl md:w-1/2">Ove odrednice su u skladu s misijom EACR-a koja ima cilj unaprijediti bazična istraživanja s jasnijim usmjerenjima prema prevenciji te liječenju i njezi oboljelih i čiji su članovi aktivni znanstvenici, studenti, emeriti, ugledne osobe u područjima vezanima na bilo koji način s rakom, različitim aspektima istraživanja raka, primjene istraživanja i menadžmentu.</p>
          <img src={eacr} alt="EACR" className="h-48 mt-12 md:m-auto justify-self-center" style={{ position: "relative", left: "-1em" }} />
        </div>
      </section>
      <section className="bg-gray-200 py-24">
        <div className="limit text-gray-600">
          <h2 className="max-w-xl font-extrabold text-4xl md:text-6xl leading-none">Suradnja</h2>
          <p className="text-2xl lg:w-1/2 mt-6 md:mt-12">HDIR nam daje veću mogućnost suradnje sa srodnim nacionalnim udrugama za istraživanje raka u drugim zemljama u Europi i svijetu (BACR, ASEICA, MOT, AACR i slično). Osim toga, želja nam je pojačati povezanost među članovima EACR u Hrvatskoj, ali prvenstveno povezati istraživače i steći prepoznatljivost djelatnosti istraživanja raka te veću dostupnost Društva za mlađe istraživače.</p>
        </div>
      </section>
      <section className="relative" style={{height: "36rem"}}>
        <div 
          className="bg-cover bg-center h-full"
          style={{
            backgroundImage: `url(${
              !!membership.image.childImageSharp ? membership.image.childImageSharp.fluid.src : membership.image
            })`,
            filter: "grayscale(100%)",
          }}
        >
        </div>
        <div className="absolute top-0 w-full py-24 px-6">
          <div className="limit">
            <h2 className="max-w-md mb-6 text-gray-600 font-extrabold text-4xl md:text-6xl leading-none">Postani naš član</h2>
            <div className="text-gray-600 text-lg">
            <p>Postani ponosni HDIR član u samo nekoliko koraka.</p>
            <Link className="btn mt-6" to="/">Saznaj kako postati član</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  goals: PropTypes.shape({
    cards: PropTypes.array,
  }),
  hero: PropTypes.object,
  membership: PropTypes.object,
  title: PropTypes.string.isRequired,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        goals={post.frontmatter.goals}
        hero={post.frontmatter.hero}
        membership={post.frontmatter.membership}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        goals {
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
        membership {
          image {
            childImageSharp {
              fluid(maxWidth: 4096, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        title
      }
    }
  }
`
