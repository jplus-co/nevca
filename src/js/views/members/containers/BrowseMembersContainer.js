import { connect } from 'preact-redux'
import BrowseMembers from '../components/BrowseMembers'
import { fetchSectors } from '../store/sectors/actions'
import { fetchMembers } from '../store/members/actions'
import { removeFilter, clearFilters } from '../store/filters/actions'

const mapStateToProps = state => ({
  loading: state.loading,
  sectors: state.sectors,
  members: state.members,
  filters: state.filters,
  pagination: state.pagination
})

const mapDispatchToProps = {
  fetchSectors,
  fetchMembers,
  removeFilter,
  clearFilters
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseMembers)
