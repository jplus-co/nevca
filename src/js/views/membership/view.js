import Barba from 'barba.js'
import TestimonialSlider from '../about/testimonial-slider'

const membership = Barba.BaseView.extend({
	namespace: 'membership',

  onEnter () {
		this.slider = new TestimonialSlider()
	},

	onEnterCompleted () {
		this.slider.init()
	},

	onLeave () {
		this.slider.destroy()
	},

	onLeaveCompleted () {}
})

export default membership
