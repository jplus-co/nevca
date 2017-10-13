import { h, Component } from 'preact'

import Sidebar from './Sidebar'
import FilterPanel from './FilterPanel'
import MemberGrid from './MemberGrid'

class BrowseMembers extends Component {
  componentDidMount () {
    this.props.fetchSectors()
    this.props.fetchMembers()
  }

  render (props, state) {
    return (
      <div class={'members__inner'}>
        <FilterPanel {...props} />
        <div>
          <button class='button button--dropdown' onClick={() => document.body.classList.add('filter-panel--active')}>
            <span class='button__inner'>
              <span class='button__text'>Filter members</span>
              <span class='button__icon'>▾</span>
            </span>
          </button>
          <MemberGrid {...props} />
        </div>
      </div>
    )
  }
}

export default BrowseMembers
