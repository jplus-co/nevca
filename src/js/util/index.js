import scroll from './scroll'
import router from './router'
import detectPointer from './detect-pointer'
import detectBrowser from './detect-browser'
import cache from './cache'
import fetch from './fetch'

const isNearlySquare = image => (image.width / image.height) < 2

export default {
  isNearlySquare,
  scroll,
  router,
  detectPointer,
  detectBrowser,
  cache,
  fetch
}
