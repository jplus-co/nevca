import config from '@config'
import { WINDOW_RESIZE } from '@constants'
import emitter from '../../core/emitter'
import transition from '../../transitions'
import scroll from 'raf-scroll'
import util from '@util'


class Scroller {
  constructor (opt = {}) {
    this.sections = opt.sections
    this.cache = []
  }

  init () {
    this.scrollY = util.scroll.current()

    this.tweens = this.sections.map(section => transition.tween[section.dataset.tween](section))

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
    this.createCache()
  }

  createCache () {
    const { scrollY } = this
    const center = config.height / 2

    this.cache = this.sections.map((section, index) => {
      const sectionBounds = section.getBoundingClientRect()

      return {
        target: section,
        top: scrollY + sectionBounds.top - center,
        tween: this.tweens[index]
      }
    })
  }

  onScroll = ({ scrollY }) => {
    this.scrollY = scrollY

    this.cache.forEach(({ target, top, tween }, index) => {
      if (scrollY > top) {
        if (target.classList.contains('handled')) return

        tween()

        target.classList.add('handled')
      }
    })
  }

  destroy () {
    this.removeEvents()
    scroll.destroy()
  }
}

export default Scroller
