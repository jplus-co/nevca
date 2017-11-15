import SplitText from '../../vendor/SplitText'

class TestimonialSlider {
  init () {
    this.slides = [...document.querySelectorAll('.js-slide')]
    this.text = [...document.querySelectorAll('.js-text')]
    this.nextButton = document.querySelector('.js-next')
    this.progress = document.querySelector('.js-circle-button-progress')
    this.timeout = window.testimonialTimeout

    this.splits = []

    this.state = {
      current: 0,
      animating: false,
      isDestroyed: false
    }

    this.split()
    this.addEvents()
    this.update()

    this.start()
  }

  split () {
    this.text.forEach(quote => {
      const tmp = new SplitText(quote, {
        type: 'lines',
        linesClass: 'line'
      })

      this.splits.push(tmp)
    })

    this.wrapSplits()
  }

  wrapSplits() {
    document.querySelectorAll('.line').forEach(line =>
      line.innerHTML = `<span class="line__inner">${line.textContent}</span>`)
  }

  addEvents() {
    this.nextButton.addEventListener('click', this.nextSlide)
  }

  removeEvents() {
    this.nextButton.removeEventListener('click', this.nextSlide)
  }

  start = () => {
    if (!this.state.isDestroyed) {
      TweenLite.to(this.progress, this.timeout / 1000, {
        strokeDashoffset: 0,
        ease: Linear.easeNone,
        onComplete: !this.state.isDestroyed && this.nextSlide
      })
    }
  }

  nextSlide = () => {
    TweenLite.to(this.progress, 0.8, {
      strokeDashoffset: 570,
      ease: Quint.easeInOut,
      onComplete: this.start
    })

    const { current } = this.state
    const next = current < this.slides.length - 1 ? current + 1 : 0
    this.setSlide(next)
  }

  setSlide (current) {
    this.state = {
      ...this.state,
      current
    }

    this.update()
  }

  update = () => {
    this.slides.forEach((slide, index) => {
      if (this.state.current === index) {
        slide.classList.add('testimonial-slider__quote-item--active')
      } else {
        slide.classList.remove('testimonial-slider__quote-item--active')
      }
    })
  }

  destroy () {
    this.removeEvents()
    this.state.isDestroyed = true
  }
}

export default TestimonialSlider
