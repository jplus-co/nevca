import { h, Component } from 'preact'
import util from '../util'

// adds support for react devtool browser extension
require('preact/debug')

class BrowseMembers extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: true,
      [this.props.url]: []
    }
  }

  componentDidMount () {
    util.fetch(this.props.url)
      .then(json => {
        console.log(json)
      })
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
