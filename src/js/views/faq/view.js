import Barba from 'barba.js'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

const faq = Barba.BaseView.extend({
	namespace: 'faq',

	onEnter () {},

	onEnterCompleted () {
    this.checkURL(window.location.hash)
  },

	onLeave () {},

	onLeaveCompleted () {},
  
  checkURL (hash) {
    if (hash.length && document.querySelector(hash)) {
      TweenLite.to(window, 1, {
        scrollTo: {
          y: hash,
          offsetY: 80
        },
        ease: Expo.easeInOut
      })
    }
  }
})

export default faq
