export default function (section) {
  const ui = {
    line: section.querySelectorAll('.js-rule')
  }

  TweenLite.set(ui.line, { transformOrigin: 'left', scaleX: 0 })

  return function () {
    TweenLite.to(ui.line, 1.5, { scaleX: 1, ease: Expo.easeOut }, 0.5)
  }
}
