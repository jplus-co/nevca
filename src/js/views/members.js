import Barba from 'barba.js'
import { h, render } from 'preact'

import {
  SECTORS_ENDPOINT
} from '../constants'

import BrowseMembers from '../components/BrowseMembers.js'

const members = Barba.BaseView.extend({
	namespace: 'members',

	onEnter () {
		const rootEl = document.querySelector('#members-container')

		render(
			<BrowseMembers url={SECTORS_ENDPOINT} />,
			rootEl
		)
  },

	onEnterCompleted () {},

	onLeave () {},

	onLeaveCompleted () {}
})

export default members
