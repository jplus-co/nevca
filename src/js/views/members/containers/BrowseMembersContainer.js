import { connect } from 'preact-redux'
import BrowseMembers from '../components/BrowseMembers'
import { fetchSectors } from '../store/sectors/actions'
import { fetchMembers } from '../store/members/actions'

const mapStateToProps = state => ({
  loading: state.loading,
  sectors: state.sectors,
  members: state.members,
  filters: state.filters
})

const mapDispatchToProps = {
  fetchSectors,
  fetchMembers
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseMembers)
