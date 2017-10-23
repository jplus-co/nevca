import { h, Component } from 'preact'
import emitter from '../../../core/emitter'
import { WINDOW_RESIZE } from '@constants'
import util from '@util'

class Mouse extends Component {
  state = {
    bounds: { x: 0, y: 0 },
    pageX: 0,
    pageY: 0,
    easeX: 0,
    easeY: 0,
    hover: false
  }

  componentDidMount () {
    this.resize()

    emitter.on(WINDOW_RESIZE, this.resize)

    // this.startLoop()
  }

  componentWillUnmount () {
    // this.stopLoop()

    emitter.off(WINDOW_RESIZE, this.resize)
  }

  resize = () => {
    const bcr = this.el.getBoundingClientRect()

    const bounds = {
      x: bcr.left,
      y: bcr.top
    }

    this.setState({ bounds })
  }

  // startLoop () {
  //   if (!this._frameId) {
  //     this._frameId = window.requestAnimationFrame(this.loop)
  //   }
  // }

  // loop = () => {
  //   let { easeX, easeY, pageX, pageY, bounds } = {...this.state}
  //
  //   // console.log(pageX, bounds.x, easeX)
  //
  //   easeX += ((pageX - bounds.x) - easeX) * 0.2
  //   easeY += ((pageY - bounds.y - util.scroll.current()) - easeY) * 0.2
  //
  //   this.setState({ easeX, easeY })
  //
  //   this.frameId = window.requestAnimationFrame(this.loop)
  // }

  // stopLoop() {
  //   window.cancelAnimationFrame(this._frameId)
  // }

  onMouseEnter = () => {
    this.setState({ hover: true })
  }

  onMouseLeave = () => {
    this.setState({ hover: false })
  }

  onMouseMove = ({ pageX, pageY }) => {
    this.setState({
      easeX: pageX,
      easeY: pageY - util.scroll.current()
    })
  }

  childFn (children, state) {
    Object.prototype.toString.call(children)
    return children[0](state)
  }

  render (props, state) {
    return (
      h(props.component,
        {
          ref: e => this.el = e,
          ...props,
          onMouseEnter: this.onMouseEnter,
          onMouseLeave: this.onMouseLeave,
          onMouseMove: this.onMouseMove
        },
        this.childFn(props.children, state)
      )
    )
  }
}

export default Mouse
