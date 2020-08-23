import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const entryColors = entry.getIn(['data', 'poster', 'colors'])
  const colors = entryColors ? entryColors.toJS() : []

  if (data) {
    return (
      <IndexPageTemplate
        hero={data.hero || {}}
        intro={data.intro || {}}
        membership={data.membership || {}}
        poster={{
          colors: colors,
          image1: {
            image: getAsset(entry.getIn(['data', 'poster', 'image1', 'image'])),
            alt: entry.getIn(['data', 'poster', 'image1', 'alt']),
          }
        }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
