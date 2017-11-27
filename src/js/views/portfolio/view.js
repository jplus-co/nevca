import Barba from 'barba.js'
import PageNavigation from '../../core/modules/page-navigation'
import Parallax from '../../core/modules/parallax'
import ScrollFx from '../../core/modules/scroll-fx'

const portfolio = Barba.BaseView.extend({
	namespace: 'portfolio',

	// Barba Lifecycle:

	onEnter () {
		this.page = document.querySelector(`[data-namespace="${this.namespace}"]`)
		
		this.navigation = new PageNavigation()

		this.initFx()
		this.initParallax()
	},

	onEnterCompleted () {
		this.navigation.init()
	},

	onLeaveCompleted () {
		this.navigation.destroy()
		this.parallax.destroy()
		this.fx.destroy()
	},

	initParallax () {
		const parallaxItems = this.page.querySelectorAll('.js-parallax')

		this.parallax = new Parallax({ parallaxItems })
		this.parallax.init()
	},

	initFx () {
		const fxTriggers = this.page.querySelectorAll('.js-fx-trigger')

		this.fx = new ScrollFx({ fxTriggers })
		this.fx.init()
	}
})

export default portfolio
