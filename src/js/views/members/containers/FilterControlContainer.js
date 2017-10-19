import { connect } from 'preact-redux'
import FilterControl from '../components/FilterControl'
import { addFilter, removeFilter } from '../store/filters/actions'

const mapStateToProps = state => ({
  filters: state.filters
})

const mapDispatchToProps = {
  addFilter,
  removeFilter
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterControl)
