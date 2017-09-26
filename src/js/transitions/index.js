import fade from './transition.fade'
import overlay from './transition.overlay'

import fadeIn from './tween.fade-in'

export default {
  fade,
  overlay,

  // Generic tweens that do not compatible with the reducer
  // extending `Barba.BaseTransition`
  tween: {
    fadeIn
  }
}
