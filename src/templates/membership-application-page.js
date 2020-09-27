import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link} from 'gatsby'
import { navigate } from 'gatsby-link'

import Layout from '../components/Layout'

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

//export const MembershipApplicationPageTemplate = ({ goals, hero, membership, title }) => {
export class MembershipApplicationPageTemplate extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isValidated: false }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': form.getAttribute('name'),
            ...this.state,
          }),
        })
          .then(() => navigate(form.getAttribute('action')))
          .catch((error) => alert(error))
    }

    render() {
        const { goals, hero, membership, title } = this.props;

        return (
            <div className="bg-gray-200">
            <section className="relative" style={{ height: "26rem" }}>
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
                <div className="limit pt-24 pb-12">
                    <p className="max-w-4xl text-lg uppercase mb-2">{title}</p>
                    <h1 className="max-w-4xl leading-none font-extrabold text-4xl md:text-6xl lg:text-7xl mb-4">{hero.title}</h1>
                    <p className="max-w-4xl text-lg md:text-2xl">{hero.subtitle}</p>
                </div>
                </div>
            </section>
            <section className="bg-gray-200 py-24">
                <div className="limit">
                    <form
                        className="max-w-3xl"
                        name="membership"
                        method="post"
                        action="/membership/thanks/"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={this.handleSubmit}
                    >
                        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                        <input type="hidden" name="form-name" value="contact" />
                            <div hidden>
                            <label>
                                Ignoriraj ovo polje:{' '}
                                <input name="bot-field" onChange={this.handleChange} />
                            </label>
                        </div>

                        <p className="font-extrabold text-gray-600 text-2xl md:text-4xl">Osnovni podaci</p>
                        <div className="flex flex-wrap mt-8">
                            <div 
                                className="w-full sm:w-1/2 sm:pr-3 mb-6"
                                htmlFor={'firstName'}
                            >
                                <div>
                                    <label class="block text-gray-600 font-bold mb-1 pr-4" for="inline-full-name">
                                        Ime
                                    </label>
                                </div>
                                <div>
                                    <input
                                        class="overflow-hidden truncate bg-white appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:border-gray-600"
                                        type={'text'}
                                        name={'firstName'}
                                        onChange={this.handleChange}
                                        id={'firstName'}
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div 
                                className="w-full sm:w-1/2 sm:pl-3 mb-6"
                                htmlFor={'lastName'}
                            >
                                <div>
                                    <label class="block text-gray-600 font-bold mb-1 pr-4" for="inline-full-name">
                                        Prezime
                                    </label>
                                </div>
                                <div>
                                    <input
                                        class="overflow-hidden truncate bg-white appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:border-gray-600"
                                        type={'text'}
                                        name={'lastName'}
                                        onChange={this.handleChange}
                                        id={'lastName'}
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div 
                                className="w-full sm:w-1/2 sm:pr-3 mb-6"
                                htmlFor={'title'}
                            >
                                <div>
                                    <label class="block text-gray-600 font-bold mb-1 pr-4" for="inline-full-name">
                                        Titula
                                    </label>
                                </div>
                                <div>
                                    <input
                                        class="overflow-hidden truncate bg-white appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:border-gray-600"
                                        type={'text'}
                                        name={'title'}
                                        onChange={this.handleChange}
                                        id={'title'}
                                        required={false}
                                    />
                                </div>
                            </div>
                            <div 
                                className="w-full sm:w-1/2 sm:pl-3 mb-6"
                                htmlFor={'degree'}
                            >
                                <div>
                                    <label class="block text-gray-600 font-bold mb-1 pr-4" for="inline-full-name">
                                        Znanstveni stupanj
                                    </label>
                                </div>
                                <div>
                                    <input
                                        class="overflow-hidden truncate bg-white appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:border-gray-600"
                                        type={'text'}
                                        name={'degree'}
                                        onChange={this.handleChange}
                                        id={'degree'}
                                        required={false}
                                    />
                                </div>
                            </div>
                            <div 
                                className="w-full sm:w-1/2 sm:pr-3 mb-6"
                                htmlFor={'birthday'}
                            >
                                <div>
                                    <label class="block text-gray-600 font-bold mb-1 pr-4" for="inline-full-name">
                                        Datum rođenja
                                    </label>
                                </div>
                                <div>
                                    <input
                                        class="overflow-hidden truncate bg-white appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:border-gray-600"
                                        type={'date'}
                                        name={'birthday'}
                                        onChange={this.handleChange}
                                        id={'birthday'}
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div 
                                className="w-full sm:w-1/2 sm:pl-3 mb-6"
                                htmlFor={'birthPlace'}
                            >
                                <div>
                                    <label class="block text-gray-600 font-bold mb-1 pr-4" for="inline-full-name">
                                        Mjesto rođenja
                                    </label>
                                </div>
                                <div>
                                    <input
                                        class="overflow-hidden truncate bg-white appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:border-gray-600"
                                        type={'text'}
                                        name={'birthPlace'}
                                        onChange={this.handleChange}
                                        id={'birthPlace'}
                                        required={false}
                                    />
                                </div>
                            </div>
                            <div 
                                className="w-full sm:w-1/2 sm:pr-3 mb-6"
                                htmlFor={'workplace'}
                            >
                                <div>
                                    <label class="block text-gray-600 font-bold mb-1 pr-4" for="inline-full-name">
                                        Ustanova u kojoj radite
                                    </label>
                                </div>
                                <div>
                                    <input
                                        class="overflow-hidden truncate bg-white appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:border-gray-600"
                                        type={'text'}
                                        name={'workplace'}
                                        onChange={this.handleChange}
                                        id={'workplace'}
                                        required={false}
                                    />
                                </div>
                            </div>
                            <div 
                                className="w-full sm:w-1/2 sm:pl-3 mb-6"
                                htmlFor={'department'}
                            >
                                <div>
                                    <label class="block text-gray-600 font-bold mb-1 pr-4" for="inline-full-name">
                                        Odjel
                                    </label>
                                </div>
                                <div>
                                    <input
                                        class="overflow-hidden truncate bg-white appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:border-gray-600"
                                        type={'text'}
                                        name={'department'}
                                        onChange={this.handleChange}
                                        id={'department'}
                                        required={false}
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="font-extrabold text-gray-600 text-2xl md:text-4xl mt-8">Kontakt podaci</p>
                        <div className="flex flex-wrap mt-8">
                            <div 
                                className="w-full sm:w-1/2 sm:pr-3 mb-6"
                                htmlFor={'street'}
                            >
                                <div>
                                    <label class="block text-gray-600 font-bold mb-1 pr-4" for="inline-full-name">
                                        Ulica
                                    </label>
                                </div>
                                <div>
                                    <input
                                        class="overflow-hidden truncate bg-white appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:border-gray-600"
                                        type={'text'}
                                        name={'street'}
                                        onChange={this.handleChange}
                                        id={'street'}
                                        required={false}
                                    />
                                </div>
                            </div>
                            <div 
                                className="w-full sm:w-1/2 sm:pl-3 mb-6"
                                htmlFor={'streetNumber'}
                            >
                                <div>
                                    <label class="block text-gray-600 font-bold mb-1 pr-4" for="inline-full-name">
                                        Kućni broj
                                    </label>
                                </div>
                                <div>
                                    <input
                                        class="overflow-hidden truncate bg-white appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:border-gray-600"
                                        type={'number'}
                                        name={'streetNumber'}
                                        min={'0'}
                                        onChange={this.handleChange}
                                        id={'streetNumber'}
                                        required={false}
                                    />
                                </div>
                            </div>
                            <div 
                                className="w-full sm:w-1/2 sm:pr-3 mb-6"
                                htmlFor={'city'}
                            >
                                <div>
                                    <label class="block text-gray-600 font-bold mb-1 pr-4" for="inline-full-name">
                                        Grad
                                    </label>
                                </div>
                                <div>
                                    <input
                                        class="overflow-hidden truncate bg-white appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:border-gray-600"
                                        type={'text'}
                                        name={'city'}
                                        onChange={this.handleChange}
                                        id={'city'}
                                        required={false}
                                    />
                                </div>
                            </div>
                            <div 
                                className="w-full sm:w-1/2 sm:pl-3 mb-6"
                                htmlFor={'postalCode'}
                            >
                                <div>
                                    <label class="block text-gray-600 font-bold mb-1 pr-4" for="inline-full-name">
                                        Poštanski broj
                                    </label>
                                </div>
                                <div>
                                    <input
                                        class="overflow-hidden truncate bg-white appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:border-gray-600"
                                        type={'number'}
                                        name={'postalCode'}
                                        min={'0'}
                                        onChange={this.handleChange}
                                        id={'postalCode'}
                                        required={false}
                                    />
                                </div>
                            </div>
                            <div 
                                className="w-full sm:w-1/2 sm:pr-3 mb-6"
                                htmlFor={'country'}
                            >
                                <div>
                                    <label class="block text-gray-600 font-bold mb-1 pr-4" for="inline-full-name">
                                        Država
                                    </label>
                                </div>
                                <div>
                                    <input
                                        class="overflow-hidden truncate bg-white appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:border-gray-600"
                                        type={'text'}
                                        name={'country'}
                                        onChange={this.handleChange}
                                        id={'country'}
                                        required={false}
                                    />
                                </div>
                            </div>
                            <div 
                                className="w-full sm:w-1/2"
                            >
                            </div>
                            <div 
                                className="w-full sm:w-1/2 sm:pr-3 mb-6"
                                htmlFor={'phone'}
                            >
                                <div>
                                    <label class="block text-gray-600 font-bold mb-1 pr-4" for="inline-full-name">
                                        Broj mobitela
                                    </label>
                                </div>
                                <div>
                                    <input
                                        class="overflow-hidden truncate bg-white appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:border-gray-600"
                                        type={'text'}
                                        name={'phone'}
                                        onChange={this.handleChange}
                                        id={'phone'}
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div 
                                className="w-full sm:w-1/2 sm:pl-3 mb-6"
                                htmlFor={'email'}
                            >
                                <div>
                                    <label class="block text-gray-600 font-bold mb-1 pr-4" for="inline-full-name">
                                        E-mail
                                    </label>
                                </div>
                                <div>
                                    <input
                                        class="overflow-hidden truncate bg-white appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:border-gray-600"
                                        type={'email'}
                                        name={'email'}
                                        onChange={this.handleChange}
                                        id={'email'}
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div 
                                className="w-full mb-6"
                                htmlFor={'interest'}
                            >
                                <div>
                                    <label class="block text-gray-600 font-bold mb-1 pr-4" for="inline-full-name">
                                        Znanstevni interes
                                    </label>
                                </div>
                                <div>
                                    <textarea
                                        class="overflow-hidden truncate bg-white appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:border-gray-600"
                                        type={'text'}
                                        name={'interest'}
                                        onChange={this.handleChange}
                                        id={'interest'}
                                        required={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <label class="block text-gray-600 flex cursor-pointer">
                            <input class="mr-2 self-start relative" type="checkbox" required={true} style={{ top: "5px" }} />
                            <span class="text-md pl-3">
                                Slažem se da moji podaci navedeni u ovoj pristupnici budu proslijeđeni u European Association for Cancer Research (EACR) u svrhu otvaranja besplatnog korisničkog računa potrebnog za učlanjenje u navedenu udrugu te radi primanja njihove pošte u elektronskom i papirnatom formatu.
                            </span>
                        </label>
                        <button className="btn mt-6" type="submit">
                            Pošalji prijavu
                        </button>
                    </form>
                </div>
            </section>
            </div>
        )
    }
}

MembershipApplicationPageTemplate.propTypes = {
  goals: PropTypes.shape({
    cards: PropTypes.array,
  }),
  hero: PropTypes.object,
  membership: PropTypes.object,
  title: PropTypes.string.isRequired,
}

const MembershipApplicationPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <MembershipApplicationPageTemplate
        goals={post.frontmatter.goals}
        hero={post.frontmatter.hero}
        membership={post.frontmatter.membership}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

MembershipApplicationPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MembershipApplicationPage

export const membershipApplicationPageQuery = graphql`
  query MembershipApplicationPage($id: String!) {
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
