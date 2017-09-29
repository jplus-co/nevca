import config from '@config'
import { WINDOW_RESIZE } from '@constants'
import emitter from '../../core/emitter'
import scroll from 'raf-scroll'
import util from '@util'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

class PageNavigation {
  init () {
    this.sections = [...document.querySelectorAll('.js-section')]
    this.links = [...document.querySelectorAll('.js-anchor-link')]
    this.scrollY = util.scroll.current()

    this.addEvents()
    this.resize()
  }

  addEvents () {
    emitter.on(WINDOW_RESIZE, this.resize)
    scroll.add(this.onScroll)

    this.links.forEach(link => link.addEventListener('click', this.onClick))
  }

  removeEvents () {
    emitter.off(WINDOW_RESIZE, this.resize)
    scroll.remove(this.onScroll)

    this.links.forEach(link => link.removeEventListener('click', this.onClick))
  }

  resize = () => {
    this.createCache()
  }

  createCache () {
    this.cache = this.sections.map((section, index) => {
      const bounds = section.getBoundingClientRect()
      const center = config.height / 2
      const { scrollY } = this

      return {
        target: section,
        top: scrollY + bounds.top - center,
        bottom: scrollY + bounds.top + bounds.height - center,
        index
      }
    })
  }

  onScroll = ({ scrollY }) => {
    this.scrollY = scrollY

    this.cache.forEach(({
      top,
      bottom,
      index
    }) => {
      if (scrollY > top && scrollY < bottom ) {
        this.links[index].classList.add('page-navigation__link--active')
      } else {
        this.links[index].classList.remove('page-navigation__link--active')
      }
    })
  }

  onClick = (e) => {
    e.preventDefault()

    TweenLite.to(window, 1, {
      scrollTo: `#${e.target.href.split('#')[1]}`,
      ease: Expo.easeInOut
    })
  }

  destroy () {
    this.removeEvents()
    scroll.destroy()
  }
}

export default PageNavigation
