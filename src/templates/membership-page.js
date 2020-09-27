import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link} from 'gatsby'

import eacr from '../img/eacr.png'

import Cards from '../components/Cards'
import Layout from '../components/Layout'
import SmallCards from '../components/SmallCards'

export const MembershipPageTemplate = ({ goals, hero, membership, title }) => {
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
        <div className="limit text-gray-600">
            <p className="text-lg">HDIR danas ima oko 10.000 članova iz preko 90 zemalja iz cijelog svijeta. Pridruži se i postani članom EACR društva.</p>
            <p className="font-extrabold text-2xl md:text-4xl pt-16">Cijena članarine</p>
            <div className="sm:flex pt-16">
                <div className="bg-white h-64 p-8 rounded-lg shadow w-64 flex flex-col">
                    <p className="font-extrabold text-xl flex-grow">Student</p>
                    <p className="text-3xl font-semibold text-center mt-16">Bez naknade</p>
                    <p className="opacity-50 text-sm text-center">Svi studenti dodiplomskih, diplomskih i doktorskij studija te nezaposleni</p>
                </div>
                <div className="bg-white h-64 p-8 rounded-lg shadow w-64 flex flex-col sm:ml-12 mt-8 sm:mt-0">
                    <p className="font-extrabold text-xl flex-grow">Član</p>
                    <p className="text-5xl font-medium text-center mt-16 leading-none">20€</p>
                    <p className="opacity-50 text-center">~151,00 kn godišnje</p>
                </div>
            </div>
        </div>
      </section>
      <section className="bg-gray-200 py-24">
        <div className="limit text-gray-600">
            <p className="font-extrabold text-2xl md:text-4xl">Novi članovi</p>
            <p className="mt-6 text-lg">Prijava za članstvo se izvodi kroz online obrazac.</p>
            <Link className="btn mt-6" to="/">Učlani se</Link>
        </div>
      </section>
      <section className="bg-gray-200 py-24">
        <div className="limit text-gray-600">
            <p className="font-extrabold text-2xl md:text-4xl">Podaci za plaćanje</p>
            <div className="max-w-lg mt-6">
                <div class="sm:flex sm:items-center mb-6">
                    <div class="sm:w-1/3">
                        <label class="block text-gray-600 font-bold sm:text-right mb-1 sm:mb-0 pr-4" for="inline-full-name">
                            Primatelj
                        </label>
                    </div>
                    <div class="sm:w-2/3">
                        <input class="overflow-hidden truncate bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none disabled" type="text" value="HDIR, Bijenička 54, 10000 Zagreb" />
                    </div>
                </div>
                <div class="sm:flex sm:items-center mb-6">
                    <div class="sm:w-1/3">
                        <label class="block text-gray-600 font-bold sm:text-right mb-1 sm:mb-0 pr-4" for="inline-full-name">
                            IBAN primatelja
                        </label>
                    </div>
                    <div class="sm:w-2/3">
                        <input class="overflow-hidden truncate bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none disabled font-number font-light" type="text" value="HR5023600001102084564" />
                    </div>
                </div>
                <div class="sm:flex sm:items-center mb-6">
                    <div class="sm:w-1/3">
                        <label class="block text-gray-600 font-bold sm:text-right mb-1 sm:mb-0 pr-4" for="inline-full-name">
                            Opis plaćanja
                        </label>
                    </div>
                    <div class="sm:w-2/3">
                        <input class="overflow-hidden truncate bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none disabled" type="text" value="Ime i Prezime – članarina za 2020." />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

MembershipPageTemplate.propTypes = {
  goals: PropTypes.shape({
    cards: PropTypes.array,
  }),
  hero: PropTypes.object,
  membership: PropTypes.object,
  title: PropTypes.string.isRequired,
}

const MembershipPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <MembershipPageTemplate
        goals={post.frontmatter.goals}
        hero={post.frontmatter.hero}
        membership={post.frontmatter.membership}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

MembershipPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MembershipPage

export const membershipPageQuery = graphql`
  query MembershipPage($id: String!) {
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
