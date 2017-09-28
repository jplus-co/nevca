import emitter from '../../core/emitter'
import SplitText from '../../vendor/SplitText'

class TestimonialSlider {
  constructor (options = {}) {
    this.slides = [...document.querySelectorAll('.js-slide')],
    this.text = [...document.querySelectorAll('.js-text')],
    this.buttons = [...document.querySelectorAll('.js-button')],
    this.nextButton = document.querySelector('.js-next')

    this.splits = []

    this.state = {
      current: 0,
      animating: false
    }

    this.mount()
  }

  mount () {
    this.text.forEach(quote => {
      const tmp = new SplitText(quote, {
        type: 'lines',
        linesClass: 'line'
      })

      this.splits.push(tmp)
    })

    this.lines = document.querySelectorAll('.line')
    this.lines.forEach(line => line.innerHTML = `<span class="line__inner">${line.textContent}</span>`)

    this.buttons.forEach(btn => btn.addEventListener('click', this.onClick))
    this.nextButton.addEventListener('click', this.nextSlide)

    this.update()
  }

  onClick = ({ currentTarget }) => {
    this.setSlide(this.buttons.indexOf(currentTarget))
  }

  nextSlide = () => {
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
        this.buttons[index].classList.add('testimonial-slider__pagination-button--active')
      } else {
        slide.classList.remove('testimonial-slider__quote-item--active')
        this.buttons[index].classList.remove('testimonial-slider__pagination-button--active')
      }
    })
  }
}

export default TestimonialSlider
