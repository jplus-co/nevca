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
  }

  componentWillUnmount () {
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
        this.props.render(state)
      )
    )
  }
}

export default Mouse
