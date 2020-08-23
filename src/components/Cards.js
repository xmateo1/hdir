import React from 'react'
import PropTypes from 'prop-types'

const Cards = ({ cards }) => (
  <div className="columns is-multiline">
    {cards.map((card, index, array) => (
        <div key={card.text} className={`${array.length - 1 === index ? "" : "mb-24"}`}>
          {index % 2 === 0 ? <Left card={card} /> : <Right card={card} />}
        </div>
      ))}
  </div>
)

const Image = ({image}) => (
    <div 
        className="bg-cover bg-right h-72 shadow"
        style={{
            filter: "grayscale(100%)",
            backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            width: "55vw"
        }}
    ></div>
)

const Left = ({card}) => (
    <div className="flex">
        <Image image={card.image || {}} />
        <Text position="left" text={card.text} />
    </div>
)

const Right = ({card}) => (
    <div className="flex justify-end">
        <Text position="right" text={card.text} />
        <Image image={card.image || {}} />
    </div>
)

const Text = ({position, text}) => (
    <div className={`bg-white w-80 h-72 shadow ${position === "left" ? "rounded-r-lg" : "rounded-l-lg"}`}>
        <p className="p-6 text-xl text-gray-dark">{text}</p>
    </div>
)

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default Cards
