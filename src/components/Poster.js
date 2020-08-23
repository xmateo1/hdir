import React from 'react'
import PropTypes from 'prop-types'

const Poster = ({ cards }) => (
  <div>
    {cards.map((card, index, array) => (
        <div key={card.text} className={`${array.length - 1 === index ? "" : "mb-24"}`}>
          {index % 2 === 0 ? <Left card={card} /> : <Right card={card} />}
        </div>
      ))}
  </div>
)

Poster.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default Poster
