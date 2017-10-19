import Barba from 'barba.js'
import Scroller from '../../core/modules/scroller'
import TestimonialSlider from '../../core/modules/testimonial-slider'
import PageNavigation from '../../core/modules/page-navigation'

const about = Barba.BaseView.extend({
	namespace: 'about',

	onEnter () {
		const parallaxItems = document.querySelectorAll('.js-parallax')

		this.scroller = new Scroller({ parallaxItems })
		this.slider = new TestimonialSlider()
		this.navigation = new PageNavigation()
	},

	onEnterCompleted () {
		this.slider.init()
		this.navigation.init()
		this.scroller.init()
	},

	onLeave () {
		this.slider.destroy()
		this.navigation.destroy()
		this.scroller.destroy()
	},

	onLeaveCompleted () {}
})

export default about
