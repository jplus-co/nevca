import util from '../util'
import imagesLoaded from 'imagesloaded'

function overlay (oldContainer, newContainer, done) {
  let imageLoader
  let loadedCount = 0

  let rafActive = true
  let lastRafId
  let progress = 0
  let ease = 100

  const ui = {
    loader: document.querySelector('.js-page-loader'),
    mask: document.querySelector('.js-page-loader-progress'),
    inner: document.querySelector('.js-page-loader-progress-inner'),
    bottom: document.querySelector('.js-layer-bottom'),
    top: document.querySelector('.js-layer-top')
  }

  function cover () {
    loop()

    return new TimelineLite({
      onComplete: () => {
        window.scroll(0, 0)
        loadImages()
      }
    })
    .to(ui.bottom, 1, { y: '0%', ease: Expo.easeInOut }, 'out')
    .to(ui.top, 1, { y: '0%', ease: Expo.easeInOut, delay: 0.075 }, 'out')
    .to(ui.loader, 1, { y: '0%', ease: Expo.easeOut, delay: 0.075 }, 'out')
  }

  function loop () {
    const target = 100 - (progress * 100)

    ease += (target - ease) * 0.1

    if (ease < 0.1) {
      ease = 0
      onDone()
    }

    ui.mask.style.transform = `translateX(${-ease}%)`
    ui.inner.style.transform = `translateX(${ease}%)`

    if (rafActive) {
      lastRafId = requestAnimationFrame(loop)
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

      .to(ui.loader, 1, { y: '100%', ease: Expo.easeInOut, clearProps: 'all' }, 'out')
      .to(ui.bottom, 1, { y: '-100%', ease: Expo.easeInOut, delay: 0.075, clearProps: 'all' }, 'out')
      .to(ui.top, 1, { y: '-100%', ease: Expo.easeInOut, clearProps: 'all' }, 'out')
  }

  function loadImages () {
    imageLoader = imagesLoaded(newContainer, { background: true })

    addEvents()

    if (imageLoader.images.length === 0) {
      cancelLoop()

      return new TimelineLite({ onComplete: onDone })
        .to(ui.mask, 1, { x: '0%', ease: SlowMo.easeOut }, 'in')
        .to(ui.inner, 1, { x: '0%', ease: SlowMo.easeOut }, 'in')
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
