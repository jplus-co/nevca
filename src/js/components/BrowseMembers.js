import { h, Component } from 'preact'
import util from '../util'

require('preact/debug')

class BrowseMembers extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: true,
      [this.props.url]: []
    }

    this.fetch = util.fetch(this)
  }


  componentDidMount () {
    this.fetch(this.props.url)
  }

  render ({ url }, { loading }) {
    return (
      <ul style={{ marginTop: 20 }}>
      {!loading &&
        this.state[url].map(item =>
          <li data-id={item.id} key={item.id}>{item.name}</li>)}
      </ul>
    )
  }
}

export default BrowseMembers
