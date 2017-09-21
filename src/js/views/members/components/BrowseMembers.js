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
        <Sidebar>
          <header class={'members__header'}>
            <h1 class={'members__title'}>
              Browse members
            </h1>
          </header>
          <FilterPanel {...props} />
        </Sidebar>
        <MemberGrid {...props} />
      </div>
    )
  }
}

export default BrowseMembers
