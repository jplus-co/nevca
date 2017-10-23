import { connect } from 'preact-redux'
import Pagination from '../components/Pagination'
import { updatePage, incrementPage, decrementPage } from '../store/pagination/actions'

const mapStateToProps = state => ({
  pagination: state.pagination
})

const mapDispatchToProps = {
  updatePage,
  incrementPage,
  decrementPage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)
