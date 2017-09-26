import fade from './transition.fade'

import fadeIn from './tween.fade-in'

export default {
  fade,

  // Generic tweens that do not compatible with the reducer
  // extending `Barba.BaseTransition`
  tween: {
    fadeIn
  }
}
