import Barba from 'barba.js'
import { h, render } from 'preact'
import util from '../util'

import {
  SECTORS_URL,
	visibleMembersURL
} from '../constants'

import BrowseMembers from '../components/BrowseMembers.js'

const members = Barba.BaseView.extend({
	namespace: 'members',

	onEnter () {
		const rootEl = document.querySelector('#members-container')
    let sectors

    this.fetchSectors()
      .then(sectors => {
        render(
    			<BrowseMembers
    				sectors={sectors}
    				membersURL={visibleMembersURL}
    			/>,
    			rootEl
    		)
      })
  },

  fetchSectors () {
    return util.fetch(SECTORS_URL)
      .then(this.nestSectors)
      .then(this.mapActiveFlags)
  },

  nestSectors (json) {
    return (
      json
      .filter(sector => sector.parent === 0)
      .map(parent => ({
        ...parent,
        // Get subsectors of parent sector and assign to new object
        children: json.filter(sector => sector.parent === parent.id)
      }))
    )
  },

  mapActiveFlags (sectors) {
    return (
      sectors
      .map(parent => ({
        ...parent,
        active: false,
        children: parent.children.map(child => ({
          ...child,
          active: false
        }))
      }))
    )
  },

	onEnterCompleted () {},

	onLeave () {},

	onLeaveCompleted () {}
})

export default members
