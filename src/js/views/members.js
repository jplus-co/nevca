import Barba from 'barba.js'
import { h, render } from 'preact'

import BrowseMembers from '../components/BrowseMembers.js'
import { PARENT_SECTORS_ENDPOINT } from '../constants'

const members = Barba.BaseView.extend({
	namespace: 'members',

	onEnter () {
		const rootEl = document.querySelector('#members-container')

		render(
			<BrowseMembers url={PARENT_SECTORS_ENDPOINT} />,
			rootEl
		)
  },

	onEnterCompleted () {},

	onLeave () {},

	onLeaveCompleted () {}
})

export default members
