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

    const newContainer = document.querySelector('.view')

    return transition.overlay(
      null,
      newContainer,
      this.done
    )
  }

  done = () => {
    config.body.classList.remove('is-loading')

    this.preloaded()
  }
}

export default new Preloader()
