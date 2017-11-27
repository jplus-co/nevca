import Barba from 'barba.js'
import TestimonialSlider from '../../core/modules/testimonial-slider'
import Parallax from '../../core/modules/parallax'
import ScrollFx from '../../core/modules/scroll-fx'

const membership = Barba.BaseView.extend({
	namespace: 'membership',

	onEnter () {
		this.page = document.querySelector(`[data-namespace="${this.namespace}"]`)

		this.slider = new TestimonialSlider()

		this.initFx()
		this.initParallax()
	},

	onEnterCompleted () {
		this.slider.init()
	},

	onLeaveCompleted () {
		this.slider.destroy()
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

export default membership
