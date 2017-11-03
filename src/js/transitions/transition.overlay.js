import util from '../util'
import imagesLoaded from 'imagesloaded'

function overlay (oldContainer, newContainer, done) {
  let imageLoader
  let loadedCount = 0

  let rafActive = true
  let lastRafId
  let progress = 0
  let ease = 0

  const ui = {
    mask: document.querySelector('.js-page-loader-progress'),
    inner: document.querySelector('.js-page-loader-progress-inner')
  }

  function cover () {
    loop()

    return new TimelineLite({
      onComplete: () => {
        window.scroll(0, 0)
        loadImages()
      }
    })
    .to('.js-layer-bottom', 1, { y: 0, ease: Expo.easeInOut }, 'out')
    .to('.js-layer-top', 1, { y: 0, ease: Expo.easeInOut, delay: 0.075 }, 'out')
    .to('.js-page-loader', 1, { opacity: 1, ease: Expo.easeOut })
  }

  function loop () {
    const percent = 100 - (progress * 100)

    ease += (percent - ease) * 0.05

    if (ease < 0.1) {
      ease = 0

      onDone()
    }

    ui.mask.style.transform = `translateY(${ease}%)`
    ui.inner.style.transform = `translateY(${-ease}%)`

    if (rafActive) {
      requestAnimationFrame(loop)
    }
  }

  function cancelLoop () {
    rafActive = false
    cancelAnimationFrame(lastRafId)
  }

  function uncover () {
    return new TimelineLite({ onComplete: () => {
      done()
    }})
      .set(oldContainer, { display: 'none' })
      .set(newContainer, { autoAlpha: 1 })

      .to('.js-page-loader', 1, { y: '-100%', opacity: 0, ease: Expo.easeInOut, clearProps: 'all' }, 'out')
      .to('.js-layer-bottom', 1, { y: '-100%', ease: Expo.easeInOut, delay: 0.075, clearProps: 'all' }, 'out')
      .to('.js-layer-top', 1, { y: '-100%', ease: Expo.easeInOut, clearProps: 'all' }, 'out')
  }

  function loadImages () {
    imageLoader = imagesLoaded(newContainer, { background: true })

    addEvents()

    if (imageLoader.images.length === 0) {
      cancelLoop()

      return new TimelineLite({ onComplete: onDone })
        .to(ui.mask, 1, { y: '0%', ease: SlowMo.easeOut }, 'in')
        .to(ui.inner, 1, { y: '0%', ease: SlowMo.easeOut }, 'in')
    }
  }

  function addEvents () {
    imageLoader.on('progress', onProgress)
  }

  function removeEvents () {
    imageLoader.off('progress', onProgress)
  }

  function onProgress (e) {
    loadedCount += 1

    progress = loadedCount / e.images.length
  }

  function onDone () {
    rafActive && cancelLoop()
    removeEvents()
    uncover()
  }

  return cover()
}

export default overlay
