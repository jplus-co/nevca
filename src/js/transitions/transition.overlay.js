import util from '../util'
import imagesLoaded from 'imagesloaded'

const overlay = (
  oldContainer,
  newContainer,
  done
) => {
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
    .set(ui.loader, { opacity: 0, scale: 0.95, y: '-80%' })
    .set(ui.bottom, { y: '100%' })
    .set(ui.top, { y: '100%' })

    .to(ui.loader, 0.75, { opacity: 1, scale: 1, y: '0%', ease: Expo.easeInOut, delay: 0.075 }, 'out')
    .to(ui.bottom, 0.75, { y: '0%', ease: Expo.easeInOut }, 'out')
    .to(ui.top, 0.75, { y: '0%', ease: Expo.easeInOut, delay: 0.075 }, 'out')
  }

  function uncover () {
    const tl = new TimelineLite({
      onComplete: () => {
        done()
      }
    })

    oldContainer && tl.set(oldContainer, { display: 'none' })
    newContainer && tl.set(newContainer, { autoAlpha: 1 })

    tl.to(ui.loader, 1, { opacity: 0, scale: 0.95, y: '80%', ease: Expo.easeInOut }, 'out')
    tl.to(ui.bottom, 1, { y: '-100%', ease: Expo.easeInOut, delay: 0.075 }, 'out')
    tl.to(ui.top, 1, { y: '-100%', ease: Expo.easeInOut }, 'out')
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

  function loadImages () {
    imageLoader = imagesLoaded(newContainer, { background: true })

    addEvents()

    if (imageLoader.images.length === 0) {
      cancelLoop()

      return new TimelineLite({ onComplete: onDone })
        .to(ui.mask, 1, { x: '0%', ease: SlowMo.easeOut, clearProps: 'all' }, 'in')
        .to(ui.inner, 1, { x: '0%', ease: SlowMo.easeOut, clearProps: 'all' }, 'in')
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
