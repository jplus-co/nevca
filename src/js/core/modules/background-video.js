import util from '@util'
import emitter from '../../core/emitter'
import { WINDOW_RESIZE } from '@constants'

class BackgroundVideo {
  constructor (opt = {}) {
    this.container = opt.container
    this.className = opt.className

    this.settings = {
      src: opt.src,
      loop: opt.loop
    }
  }

  init () {
    this.resize()
    this.createVideoElement()
    this.addEvents()
    this.applySettings()
  }

  createVideoElement () {
    this.video = document.createElement('video')
    this.container.appendChild(this.video)
  }

  applySettings () {
    this.video.src = this.settings.src
    this.video.loop = this.settings.loop
  }

  addEvents () {
    this.video.addEventListener('loadeddata', this.onLoad, { once: true })

    emitter.on(WINDOW_RESIZE, this.resize)
    util.scroll.manager.add(this.onScroll)
  }

  removeEvents () {
    emitter.off(WINDOW_RESIZE, this.resize)
    util.scroll.manager.remove(this.onScroll)
  }

  onLoad = () => {
    window.requestAnimationFrame(() => {
      this.video.play()
      this.container.classList.remove(this.className)
    })
  }

  onScroll = ({ scrollY }) => {
    if (scrollY > this.threshold) {
      this.video.pause()
    } else {
      this.video.play()
    }
  }

  resize = () => {
    this.createCache()
  }

  createCache () {
    const containerBounds = this.container.getBoundingClientRect()

    this.threshold = containerBounds.height
  }

  destroy () {
    this.removeEvents()

    this.video.paused && this.video.pause()
  }
}

export default BackgroundVideo
