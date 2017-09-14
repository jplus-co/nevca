import Barba from 'barba.js'
import { h, render } from 'preact'

import FilterMembers from '../components/filter-members.js'

const members = Barba.BaseView.extend({
	namespace: 'members',

	onEnter () {
    render(
      <FilterMembers
        url={'/wp-json/wp/v2/industries'}
      />,
      document.querySelector('.browse-members')
    )
  },

	onEnterCompleted () {},

	onLeave () {},

	onLeaveCompleted () {}
})

export default members
