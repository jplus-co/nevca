import Barba from 'barba.js'
import TestimonialSlider from './testimonial-slider'
import PageNavigation from './page-navigation'

const about = Barba.BaseView.extend({
	namespace: 'about',

	onEnter () {
		this.slider = new TestimonialSlider()
		this.navigation = new PageNavigation()
	},

	onEnterCompleted () {
		this.slider.init()
		this.navigation.init()
	},

	onLeave () {
		this.slider.destroy()
		this.navigation.destroy()
	},

	onLeaveCompleted () {}
})

export default about
