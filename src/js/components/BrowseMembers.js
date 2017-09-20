import { h, Component } from 'preact'
import compose from 'lodash.compose'
import util from '../util'

import FilterPanel from './FilterPanel'
import VisibleMemberGrid from './VisibleMemberGrid'

// adds support for react devtool browser extension
require('preact/debug')

class BrowseMembers extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: true,
      members: [], // [array] of member {objects}
      activeFilters: [] // [array] of sector #ID's
    }
  }

  // TODO: move into redux store config
  componentDidMount () {
    this.fetchVisibleMembers(this.state)
      .then(this.setMemberData)
      .then(this.setLoading(false))
  }

  fetchVisibleMembers = compose(
    util.fetch,
    this.props.membersURL
  )

  setLoading = value => this.setState({
    loading: value
  })

  setMemberData = members => this.setState({
    members
  })

  setActiveFilters = activeFilters => this.setState({
    activeFilters
  })

  addFilter = id => setActiveFilters([
    ...this.state.activeFilters,
    id
  ])

  removeFilter = id => setActiveFilters(
    this.state.activeFilters
      .filter(stateId => id !== stateId)
  )

  render ({ sectors }, state) {
    return (
      !state.loading && (
        <div style={{ display: 'flex' }}>
          <FilterPanel
            sectors={sectors}
            addFilter={this.addFilter}
            removeFilter={this.removeFilter}
            setLoading={this.setLoading}
            setMemberData={this.setMemberData}
            fetchVisibleMembers={this.fetchVisibleMembers}
            {...state} />
          <VisibleMemberGrid {...state} />
        </div>
      )
    )
  }
}

export default BrowseMembers
