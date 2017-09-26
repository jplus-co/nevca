import config from '../config'

export default {
  lock () {
    config.body.style.overflow = 'hidden'
    config.body.style.pointerEvents = 'none'
    config.body.style.cursor = 'wait'
  },

  unlock () {
    config.body.removeAttribute('style')
  }
}
