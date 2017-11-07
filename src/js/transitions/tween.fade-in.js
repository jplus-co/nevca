export default function (el) {
  TweenLite.set(el, { opacity: 0 })

  return function () {
    TweenLite.to(el, 1, { opacity: 1, ease: Cubic.easeOut })
  }
}
