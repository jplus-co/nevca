import util from '../util'

function overlay (oldContainer, newContainer, done) {
  function animateOut () {
    return new TimelineLite({
      onComplete: () => {
        window.scroll(0, 0)
        animateIn()
      }
    })
    .to('.js-layer-bottom', 1, { y: 0, ease: Expo.easeInOut }, 'out')
    .to('.js-layer-top', 1, { y: 0, ease: Expo.easeInOut, delay: 0.075 }, 'out')
  }

  function animateIn () {
    return new TimelineLite({ onComplete: done })
      .set(oldContainer, { display: 'none' })
      .set(newContainer, { autoAlpha: 1 })
      .to('.js-layer-bottom', 1, { y: '-100%', ease: Expo.easeInOut, delay: 0.075, clearProps: 'all' }, 'in')
      .to('.js-layer-top', 1, { y: '-100%', ease: Expo.easeInOut, clearProps: 'all' }, 'in')
  }

  return animateOut()
}

export default overlay
