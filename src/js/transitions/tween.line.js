export default function (line) {
  TweenLite.set(line, { transformOrigin: 'left', scaleX: 0 })

  return function () {
    TweenLite.to(line, 1.5, { scaleX: 1, ease: Expo.easeOut }, 1)
  }
}
