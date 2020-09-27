import React from 'react'
import PropTypes from 'prop-types'
import { MembershipPageTemplate } from '../../templates/membership-page'

const MembershipPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <MembershipPageTemplate
        goals={data.goals || {}}
        hero={data.hero || {}}
        membership={data.membership || {}}
        title={entry.getIn(['data', 'title'])}
      />
    )
  }
}

MembershipPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default MembershipPagePreview
