import { fetchMembers } from '../store/members/actions'
import { addFilter, removeFilter } from '../store/filters/actions'

import { connect } from 'preact-redux'
import FilterControl from '../components/FilterControl'

const mapStateToProps = state => ({
  filters: state.filters
})

const mapDispatchToProps = {
  addFilter,
  removeFilter,
  fetchMembers
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterControl)
