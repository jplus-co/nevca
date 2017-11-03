import util from '@util'
import config from '@config'
import emitter from '../../core/emitter'
import { WINDOW_RESIZE } from '@constants'

import transition from '../../transitions'

class ScrollFx {
  constructor (opt) {
    this.resizing = false
    this.cache = null
    this.fxTriggers = [...opt.fxTriggers]
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
    const threshold = config.height / 2

    this.cache = this.fxTriggers.map((el, index) => {
      const { scrollY } = util.scroll.manager.getCurrent()
      const bounds = el.getBoundingClientRect()
      return {
        target: el,
        state: false,
        top: scrollY + bounds.top + threshold,
        bottom: scrollY + bounds.bottom + threshold,
        timeline: this.createTimeline(el)
      }
    })
  }

  createTimeline = (el) => {
    const timeline = new TimelineMax({ paused: true })
    const items = [...el.querySelectorAll('.js-fx')]

    items.forEach(item => {
      const tweenName = item.dataset.tween || 'default'
      const tween = transition.tween[tweenName](item)

      timeline.add(tween)
    })

    return timeline
  }

  onScroll = (e) => {
    this.cache.forEach((entry, i) => {
      if (!this.cache) return

      const el = entry.target
      const current = e.scrollY
      const top = Math.round(entry.top - current)
      const bottom = Math.round(entry.bottom - current)
      const inView = bottom > 0 && top < config.height

      if (inView) {
        entry.timeline.play()
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

export default ScrollFx
