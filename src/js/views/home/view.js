import Barba from 'barba.js'
import config from '@config'
import transition from '../../transitions'
import BackgroundVideo from '../../core/modules/background-video'
import Scroller from '../../core/modules/scroller'

const home = Barba.BaseView.extend({
	namespace: 'home',

	onEnter () {
		this.initBackgroundVideo()
		this.initScroller()
		this.animateIn = this.setup()
	},

	onEnterCompleted () {
		this.animateIn()
	},

	onLeave () {
		this.scroller.destroy()
	},

	onLeaveCompleted () {
		!config.isDevice && this.video.destroy()
	},

// methods:

	initBackgroundVideo () {
		const container = document.querySelector('.js-video-container')

		this.video = new BackgroundVideo({
			container,
			src: container.dataset.src,
			loop: true,
			className: 'hero__video-container--video-loading'
		})

		this.video.init()
	},

	initScroller () {
		const parallaxItems = document.querySelectorAll('.js-parallax')

		this.scroller = new Scroller({ parallaxItems })

		this.scroller.init()
	},

	setup () {
		const heading = document.querySelector('.hero__heading')

		return transition.tween.homeHero({
			heading
		})
	}
})

export default home
