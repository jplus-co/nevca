import { h, Component } from 'preact'
import { connect } from 'preact-redux'

import { fetchSectors } from '../store/sectors/actions'
import { fetchMembers } from '../store/members/actions'

import FilterPanel from './FilterPanel'
import VisibleMemberGrid from './VisibleMemberGrid'

class BrowseMembers extends Component {
  componentDidMount () {
    this.props.fetchSectors()
    this.props.fetchMembers()
  }

  render (props, state) {
    return (
      <div style={{ display: 'flex' }}>
        <FilterPanel {...props} />
        <VisibleMemberGrid {...props} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sectors: state.sectors,
  members: state.members,
  activeFilters: state.activeFilters
})

const mapDispatchToProps = {
  fetchSectors,
  fetchMembers
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseMembers)
