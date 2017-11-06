import Barba from 'barba.js'
import PageNavigation from '../../core/modules/page-navigation'

import config from '@config'
import transition from '../../transitions'
import Parallax from '../../core/modules/parallax'
import ScrollFx from '../../core/modules/scroll-fx'

const portfolio = Barba.BaseView.extend({
	namespace: 'portfolio',

	// Barba Lifecycle:

	onEnter () {
		this.page = document.querySelector(`[data-namespace="${this.namespace}"]`)
		this.heading = this.page.querySelector('.hero__heading')

		this.navigation = new PageNavigation()
	},

	onEnterCompleted () {
		this.initParallax()
		this.initFx()

		this.navigation.init()
	},

	onLeave () {},

	onLeaveCompleted () {
		this.navigation.destroy()
		this.parallax.destroy()
		this.fx.destroy()
	},

	// Methods:

	initParallax () {
		const parallaxItems = this.page.querySelectorAll('.js-parallax')

		this.parallax = new Parallax({ parallaxItems })
		this.parallax.init()
	},

	initFx () {
		const fxTriggers = this.page.querySelectorAll('.js-fx-trigger')

		this.fx = new ScrollFx({ fxTriggers })
		this.fx.init()
	},
})

export default portfolio
