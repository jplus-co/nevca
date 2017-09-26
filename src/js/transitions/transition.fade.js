import util from '../util'

function fade (oldContainer, newContainer, done) {
  function animateOut () {
    TweenLite.to(oldContainer, 1, {
      autoAlpha: 0,
      onComplete: () => {
        window.scroll(0,0)
        animateIn()
      }
    })
  }

  function animateIn () {
    return new TimelineLite({ onComplete: done })
      .set(oldContainer, { display: 'none' })
      .set(newContainer, { autoAlpha: 0 })
      .to(newContainer, 1, { autoAlpha: 1 })
  }

  return animateOut()
}

export default fade
