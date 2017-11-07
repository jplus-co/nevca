import Barba from 'barba.js'
import TestimonialSlider from '../../core/modules/testimonial-slider'
import Parallax from '../../core/modules/parallax'
import ScrollFx from '../../core/modules/scroll-fx'

const membership = Barba.BaseView.extend({
	namespace: 'membership',

	onEnter () {
		this.page = document.querySelector(`[data-namespace="${this.namespace}"]`)

		this.slider = new TestimonialSlider()
	},

	onEnterCompleted () {
		this.slider.init()

		this.initParallax()
		this.initFx()
	},

	onLeave () {
		this.slider.destroy()

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

export default membership
