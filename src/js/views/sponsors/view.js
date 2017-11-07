import Barba from 'barba.js'
import Parallax from '../../core/modules/parallax'
import ScrollFx from '../../core/modules/scroll-fx'

const sponsors = Barba.BaseView.extend({
	namespace: 'sponsors',

	onEnter () {
		this.page = document.querySelector(`[data-namespace="${this.namespace}"]`)
  },

	onEnterCompleted () {
    this.initParallax()
		this.initFx()
	},

	onLeave () {
    this.parallax.destroy()
		this.fx.destroy()
	},

	onLeaveCompleted () {},

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

export default sponsors
