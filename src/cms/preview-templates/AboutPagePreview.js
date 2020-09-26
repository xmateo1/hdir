import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <AboutPageTemplate
        goals={data.goals || {}}
        hero={data.hero || {}}
        membership={data.membership || {}}
        title={entry.getIn(['data', 'title'])}
      />
    )
  }
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default AboutPagePreview
