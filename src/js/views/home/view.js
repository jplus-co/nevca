import Barba from 'barba.js'
import Scroller from '../../core/modules/scroller'

const home = Barba.BaseView.extend({
	namespace: 'home',

	onEnter () {
		const parallaxItems = document.querySelectorAll('.js-parallax')

		this.scroller = new Scroller({ parallaxItems })
	},

	onEnterCompleted () {
		this.scroller.init()
	},

	onLeave () {
		this.scroller.destroy()
	},

	onLeaveCompleted () {}
})

export default home
