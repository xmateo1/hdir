import React from 'react'
import PropTypes from 'prop-types'
import { MembershipApplicationPageTemplate } from '../../templates/membership-application-page'

const MembershipApplicationPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <MembershipApplicationPageTemplate
        goals={data.goals || {}}
        hero={data.hero || {}}
        membership={data.membership || {}}
        title={entry.getIn(['data', 'title'])}
      />
    )
  }
}

MembershipApplicationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default MembershipApplicationPagePreview
