import Barba from 'barba.js'
import PageNavigation from '../../core/modules/page-navigation'

const portfolio = Barba.BaseView.extend({
	namespace: 'portfolio',

	onEnter () {
		this.navigation = new PageNavigation()
	},

	onEnterCompleted () {
		this.navigation.init()
	},

	onLeave () {
		this.navigation.destroy()
	},

	onLeaveCompleted () {}
})

export default portfolio
