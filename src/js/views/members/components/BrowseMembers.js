import { h, Component } from 'preact'

import FilterPanel from './FilterPanel'
import VisibleMemberGrid from './VisibleMemberGrid'

// adds support for react devtool browser extension
require('preact/debug')

const BrowseMembers = (props) => (
  <div style={{ display: 'flex' }}>
    <FilterPanel {...props} />
    <VisibleMemberGrid {...props} />
  </div>
)

export default BrowseMembers
