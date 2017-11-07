import Barba from 'barba.js'
import config from '@config'
import transition from '../../transitions'
import BackgroundVideo from '../../core/modules/background-video'
import Parallax from '../../core/modules/parallax'
import ScrollFx from '../../core/modules/scroll-fx'

const home = Barba.BaseView.extend({
	namespace: 'home',

	// Barba Lifecycle:

	onEnter () {
		this.page = document.querySelector(`[data-namespace="${this.namespace}"]`)
		this.heading = this.page.querySelector('.hero__heading')
		this.setup()

		this.initBackgroundVideo()
	},

	onEnterCompleted () {
		this.animateIn()

		this.initParallax()
		this.initFx()
	},

	onLeave () {},

	onLeaveCompleted () {
		this.parallax.destroy()
		this.fx.destroy()
		!config.isDevice && this.video.destroy()
	},

	// Methods:

	setup () {
		const split = this.heading.innerHTML.split('<br>')
	    .map(lineContent => `
	      <div class="line">${lineContent}</div>
	    `).join('')

	  this.heading.innerHTML = split

	  TweenLite.set('.line', { y: '75%', autoAlpha: 0 })
	},

	animateIn () {
		return new TimelineLite()
	    .staggerTo('.line', 1.2, {
	      y: '0%',
	      autoAlpha: 1,
	      ease: Expo.easeOut
	    }, 0.075)
	},

	initBackgroundVideo () {
		const container = this.page.querySelector('.js-video-container')

		this.video = new BackgroundVideo({
			container,
			src: container.dataset.src,
			loop: true,
			loadingClass: 'hero__video-container--video-loading'
		})

		this.video.init()
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

export default home
