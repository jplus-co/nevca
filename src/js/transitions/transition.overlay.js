import util from '../util'
import imagesLoaded from 'imagesloaded'

function overlay (oldContainer, newContainer, done) {
  let imageLoader
  let loadedCount = 0

  function cover () {
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

  function uncover () {
    return new TimelineLite({ onComplete: done })
      .set(oldContainer, { display: 'none' })
      .set(newContainer, { autoAlpha: 1 })

      .to('.js-page-loader', 1, { opacity: 0, ease: Expo.easeIn })
      .set('.js-page-loader-progress', { y: '100%' })
      .set('.js-page-loader-progress-inner', { y: '-100%' })

      .to('.js-layer-bottom', 1, { y: '-100%', ease: Expo.easeInOut, delay: 0.075, clearProps: 'all' }, 'in')
      .to('.js-layer-top', 1, { y: '-100%', ease: Expo.easeInOut, clearProps: 'all' }, 'in')
  }

  function loadImages () {
    imageLoader = imagesLoaded(newContainer, { background: true })

    addEvents()
  }

  function addEvents () {
    imageLoader.on('done', onDone)
    imageLoader.on('progress', onProgress)
  }

  function removeEvents () {
    imageLoader.off('done', onDone)
    imageLoader.off('progress', onProgress)
  }

  function onProgress (e) {
    loadedCount += 1

    const progress = 100 - ((loadedCount / e.images.length) * 100)

    TweenLite.to('.js-page-loader-progress', 0.5, { y: `${progress}%`, ease: Cubic.easeInOut })
    TweenLite.to('.js-page-loader-progress-inner', 0.5, { y: `${-progress}%`, ease: Cubic.easeInOut })
  }

  function onDone (e) {
    removeEvents()
    setTimeout(uncover(), 1000)
  }

  return cover()
}

export default overlay
