import { h, Component } from 'preact'
import classnames from 'classnames'

import FilterPanel from './FilterPanel'
import MemberGrid from './MemberGrid'
import Pagination from '../containers/PaginationContainer'

class BrowseMembers extends Component {
  componentDidMount () {
    this.props.fetchSectors()
    this.props.fetchMembers()
  }

  render (props, state) {
    const {
      members,
      pagination,
      decrementPage,
      incrementPage,
      updatePage,
      filters
    } = props

    return (
      <div class='members__inner'>
        <FilterPanel {...props} />
        <div>
          <div class='flex align-items-center pb-6 pb-3-md'>
            <button 
              class='button button--dropdown'
              // TODO: encapsulate this side effect in a component
              onClick={() => document.body.classList.add('filter-panel--active')
            }>
              <span class='button__inner'>
                <span class='button__text'>Filter members</span>
                <span class='button__icon'>▾</span>
              </span>
            </button>
            {
              // Only render result count when filters are active
              filters.length ? (
                <p class="ml-4">{members.count} results</p>  
              ) : (
                null
              )
            }
          </div>
          <MemberGrid {...props} />
          <Pagination />
        </div>
      </div>
    )
  }
}

export default BrowseMembers
