import Barba from 'barba.js'
import Scroller from './scroller'

const home = Barba.BaseView.extend({
	namespace: 'home',

	onEnter () {
		const parallaxItems = document.querySelectorAll('.js-parallax')

		this.scroller = new Scroller({ parallaxItems })
	},

	onEnterCompleted () {
		this.scroller.init()
	},

	onLeave () {},

	onLeaveCompleted () {}
})

export default home
