import React from 'react'
import { Link } from 'gatsby'

const Hero = class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { hero } = this.props;
    return (
        <section className="relative" style={{height: "50rem"}}>
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
            <div className="limit py-24">
                <h1 className="max-w-4xl leading-none font-extrabold text-4xl md:text-7xl mb-4">{hero.title}</h1>
                <p className="max-w-4xl text-lg md:text-2xl">{hero.subtitle}</p>
                {hero.link.page !== '' && hero.link.title !== '' && 
                    <p className="mt-6"><Link className="btn" to={hero.link.page}>{hero.link.title}</Link></p>
                }
            </div>
            </div>
        </section>
    )
  }
}

Hero.propTypes = {
    hero: {}
}

export default Hero
