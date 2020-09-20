import React from 'react'
import PropTypes from 'prop-types'

const Cards = ({ cards, className }) => (
  <div className={className || ''} >
    {cards.map((card, index, array) => (
        <div key={card.text} className={`${array.length - 1 === index ? "" : "mb-24"}`}>
          {index % 2 === 0 ? <Left card={card} /> : <Right card={card} />}
        </div>
      ))}
  </div>
)

const Image = ({ focus, image }) => (
    <div 
        className={`bg-cover h-80 shadow ${focus === "left" ? "bg-left" : "bg-right"}`}
        style={{
            filter: "grayscale(100%)",
            backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            width: "55vw"
        }}
    ></div>
)

const Left = ({ card }) => (
    <div className="flex">
        <Image focus={card.focus || "bg-center"} image={card.image || {}} />
        <Text position="left" text={card.text} />
    </div>
)

const Right = ({ card }) => (
    <div className="flex justify-end">
        <Text position="right" text={card.text} />
        <Image focus={card.focus || "bg-center"} image={card.image || {}} />
    </div>
)

const Text = ({ position, text }) => (
    <div className={`bg-white w-80 h-80 shadow ${position === "left" ? "rounded-r-lg" : "rounded-l-lg"}`}>
        <p className="p-6 text-xl text-gray-600">{text}</p>
    </div>
)

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      focus: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
  className: PropTypes.string
}

export default Cards
