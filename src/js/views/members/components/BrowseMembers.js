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
        {/*<Sidebar>
          <FilterPanel {...props} />
        </Sidebar>*/}
        <MemberGrid {...props} />
      </div>
    )
  }
}

export default BrowseMembers
