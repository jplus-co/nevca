import rafScroll from 'raf-scroll'
import emitter from '../../core/emitter'
import { WINDOW_RESIZE } from '@constants'
import config from '@config'

// rafScroll.add(function onScroll(event) {
//   if (window.innerHeight + event.scrollY >= document.offsetHeight - window.innerHeight * 0.5) {
//     triggerInfiniteScroll();
//   }
// }

class Parallax {
  constructor (opt) {
    this.resizing = false
    this.cache = null
    this.parallaxItems = [...opt.parallaxItems]
  }

  init () {
    this.resize()
    emitter.on(WINDOW_RESIZE, this.resize)
    rafScroll.add(this.onScroll)
  }

  resize = () => {
    this.createCache()
  }

  createCache = () => {
    this.cache = this.parallaxItems.map((el, index) => {
      const { scrollY } = rafScroll.getCurrent()
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
        console.log(entry.computed)
        el.style.transform = `${entry.computed === 'none' ? '' : entry.computed} translate3d(0, ${transform.toFixed(2)}px, 0)`
      } else {
        el.style.transform = 'none'
      }
    })
  }

  destroy () {
    emitter.off(WINDOW_RESIZE, this.resize)
    rafScroll.remove()
    rafScroll.destroy()
  }
}

export default Parallax
