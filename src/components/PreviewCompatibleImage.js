import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const { childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img className="z-40" fluid={image.childImageSharp.fluid} alt="" />
    )
  }

  if (!!childImageSharp) {
    return <Img className="z-40" fluid={childImageSharp.fluid} alt="" />
  }

  if (!!image && typeof image === 'string')
    return <img className="z-40" src={image} alt="" />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  }).isRequired,
}

export default PreviewCompatibleImage
