import { h, Component } from 'preact'
import { connect } from 'preact-redux'

import { fetchMembers } from '../store/members/actions'
import { addFilter, removeFilter } from '../store/activeFilters/actions'

class FilterControl extends Component {
  handleClick = id => ({ target }) => {
    target.checked
      ? this.props.addFilter(id)
      : this.props.removeFilter(id)

    requestAnimationFrame(() =>
      this.props.fetchMembers(this.props.activeFilters)
    )
  }

  render () {
    const { id, isParent, children, style } = this.props
    const WrapperTagname = isParent ? 'h3' : 'span'

    return (
      <label
          htmlFor={`filter-checkbox-${id}`}
          style={Object.assign({}, style, { display: 'block', cursor: 'pointer' })}>
        <input
          onClick={this.handleClick(id)}
          style={{marginRight: 5}}
          type='checkbox' id={`filter-checkbox-${id}`}
          value={id} />
        <WrapperTagname style={{ userSelect: 'none', marginBottom: 10, display: 'inline-block' }}>
          {children}
        </WrapperTagname>
      </label>
    )
  }
}

const mapStateToProps = state => ({
  activeFilters: state.activeFilters
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
