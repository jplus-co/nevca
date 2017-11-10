import util from '@util'
import config from '@config'
import emitter from '../../core/emitter'
import { WINDOW_RESIZE } from '@constants'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

class PageNavigation {
  init () {
    this.container = document.querySelector('.js-page-navigation')
    this.sections = [...document.querySelectorAll('.js-section')]
    this.links = [...document.querySelectorAll('.js-anchor-link')]
    this.scrollY = util.scroll.current()

    this.previousColor = null
    this.currentColor = null

    this.addEvents()
    this.resize()
    
    this.checkURL(window.location.hash)
  }
  
  checkURL (hash) {
    if (hash.length && document.querySelector(hash)) {
      TweenLite.to(window, 1, {
        scrollTo: hash,
        ease: Expo.easeInOut
      })
    }
  }

  addEvents () {
    emitter.on(WINDOW_RESIZE, this.resize)
    util.scroll.manager.add(this.onScroll)

    this.links.forEach(link => link.addEventListener('click', this.onClick))
  }

  removeEvents () {
    emitter.off(WINDOW_RESIZE, this.resize)
    util.scroll.manager.remove(this.onScroll)

    this.links.forEach(link => link.removeEventListener('click', this.onClick))
  }

  resize = () => {
    this.createCache()
  }

  createCache () {
    const { scrollY } = this
    const containerBounds = this.container.getBoundingClientRect()
    const center = containerBounds.top + (containerBounds.height / 2)

    this.cache = this.sections.map((section, index) => {
      const sectionBounds = section.getBoundingClientRect()

      return {
        target: section,
        top: scrollY + sectionBounds.top - center,
        bottom: scrollY + sectionBounds.top + sectionBounds.height - center,
        index,
        background: section.dataset.background
      }
    })

    this.currentColor = this.cache[0].background
  }

  onScroll = ({ scrollY }) => {
    this.scrollY = scrollY

    this.onContainerActive(scrollY)

    this.cache.forEach(({
      top,
      bottom,
      index,
      background
    }) => {
      this.onSectionActive(scrollY, top, bottom, index, background)
    })
  }

  onContainerActive (scrollY) {
    if (scrollY > this.cache[0].top && scrollY < this.cache[this.cache.length - 1].bottom) {
      this.container.classList.remove('inactive')
    } else {
      this.container.classList.add('inactive')
    }
  }

  onSectionActive (scrollY, top, bottom, index, background) {
    if (scrollY > top && scrollY < bottom ) {
      this.links[index].classList.add('page-navigation__link--active')
      this.currentColor = background
    } else {
      this.links[index].classList.remove('page-navigation__link--active')
    }

    this.previousColor && this.container.classList.remove(this.previousColor)
    this.container.classList.add(this.currentColor)

    this.previousColor = this.currentColor
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
  }
}

export default PageNavigation
