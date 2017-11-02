import config from '@config'
import debounce from 'lodash.debounce'
import { WINDOW_RESIZE } from '@constants'
import emitter from '../../core/emitter'
import transition from '../../transitions'
import scroll from 'raf-scroll'
import util from '@util'


class Scroller {
  constructor (opt = {}) {
    this.sections = opt.sections
    this.tweenCache = []
  }

  init () {
    this.header = document.querySelector('.js-site-header')
    this.scrollY = this.lastScrollY = util.scroll.current()

    // this.tweens = this.sections.map(section => {
    //   // each tween factory takes section dom element and performs setup.
    //   // returns function; call it again to trigger animation.
    //   return transition.tween[section.dataset.tween](section)
    // })

    this.addEvents()
    this.resize()
  }

  addEvents () {
    emitter.on(WINDOW_RESIZE, this.resize)
    scroll.add(this.onScroll)
  }

  removeEvents () {
    emitter.off(WINDOW_RESIZE, this.resize)
    scroll.remove(this.onScroll)
  }

  resize = () => {
    // this.createTweenCache()
  }

  createTweenCache () {
    const { scrollY } = this
    const threshold = config.height / 2

    this.tweenCache = this.sections.map((section, index) => {
      const sectionBounds = section.getBoundingClientRect()

      return {
        target: section,
        top: scrollY + sectionBounds.top - threshold,
        tween: this.tweens[index] // save reference to the tween
      }
    })
  }

  onScroll = ({ scrollY, deltaY }) => {
    this.scrollY = scrollY

    this.handleNav(scrollY, deltaY)

    // this.tweenCache.forEach(({ target, top, tween }, index) => {
    //   if (scrollY > top) {
    //     if (target.classList.contains('handled')) return
    //     tween()
    //     target.classList.add('handled')
    //   }
    // })
  }

  handleNav = (scrollY, deltaY) => {
    if (scrollY > config.height) {
      if (deltaY > 0) {
        this.header.classList.add('site-header--is-hidden')
      } else if (deltaY < 0) {
        this.header.classList.remove('site-header--is-hidden')
      }
    }
  }

  destroy () {
    this.removeEvents()
    scroll.destroy()
  }
}

export default Scroller
