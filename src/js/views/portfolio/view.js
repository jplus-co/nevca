import Barba from 'barba.js'
import PageNavigation from '../../core/modules/page-navigation'

const portfolio = Barba.BaseView.extend({
	namespace: 'portfolio',

	// Barba Lifecycle:

	onEnter () {
		this.navigation = new PageNavigation()
	},

	onEnterCompleted () {
		this.navigation.init()
	},

	onLeave () {},

	onLeaveCompleted () {
		this.navigation.destroy()
	}
})

export default portfolio
