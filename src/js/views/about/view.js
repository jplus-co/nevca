import Barba from 'barba.js'
import TestimonialSlider from './testimonial-slider'

const about = Barba.BaseView.extend({
	namespace: 'about',

	onEnter () {
		this.slider = new TestimonialSlider()
	},

	onEnterCompleted () {},

	onLeave () {},

	onLeaveCompleted () {}
})

export default about
