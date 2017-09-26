import config from '../config'

export default {
  lock () {
    config.html.style.pointerEvents = 'none'
    config.html.style.cursor = 'wait'
  },

  unlock () {
    config.html.removeAttribute('style')
  }
}
