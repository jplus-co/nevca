import Barba from 'barba.js'
import TestimonialSlider from './testimonial-slider'

const about = Barba.BaseView.extend({
	namespace: 'about',

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

export default about
