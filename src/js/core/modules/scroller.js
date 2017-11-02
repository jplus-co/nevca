import util from '@util'
import config from '@config'
import emitter from '../../core/emitter'
import { WINDOW_RESIZE } from '@constants'

class Parallax {
  constructor (opt) {
    this.resizing = false
    this.cache = null
    this.parallaxItems = [...opt.parallaxItems]
  }

  init () {
    this.resize()
    emitter.on(WINDOW_RESIZE, this.resize)
    util.scroll.manager.add(this.onScroll)
  }

  resize = () => {
    this.createCache()
  }

  createCache = () => {
    this.cache = this.parallaxItems.map((el, index) => {
      el.style.willChange = 'transform'
      const { scrollY } = util.scroll.manager.getCurrent()
      const bounds = el.getBoundingClientRect()
      return {
        target: el,
        top: scrollY + bounds.top,
        bottom: scrollY + bounds.bottom,
        computed: getComputedStyle(el).transform,
        speed: el.dataset.speed || '-1'
      }
    })
  }

  onScroll = (e) => {
    this.cache.forEach((entry, i) => {
      if (!this.cache) return

      const el = entry.target
      const current = e.scrollY
      const transform = (entry.top - current) * entry.speed
      const top = Math.round(entry.top - current)
      const bottom = Math.round(entry.bottom - current)
      const inView = bottom > 0 && top < config.height

      if (inView) {
        el.style.transform = `${
          entry.computed === 'none'
            ? ''
            : entry.computed + ' '
        }translate3d(0, ${transform.toFixed(3)}px, 0)`
      } else {
        // el.style.transform = 'none'
      }
    })
  }

  destroy () {
    emitter.off(WINDOW_RESIZE, this.resize)
    util.scroll.manager.remove(this.onScroll)
  }
}

export default Parallax
