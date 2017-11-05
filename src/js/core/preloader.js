import config from '../config'
import utils from '../util'
import transition from '../transitions'

class Preloader {
  constructor (onComplete) {
    this.el = config.preloader
  }

  init (onComplete) {
    this.preloaded = onComplete

    utils.detectPointer()
    utils.detectBrowser()

    return transition.overlay(
      null,
      config.container,
      this.done
    )
  }

  done = () => {
    config.body.classList.remove('is-loading')

    this.preloaded()
  }
}

export default new Preloader()
