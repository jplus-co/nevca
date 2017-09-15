import { h, Component } from 'preact'
import util from '../util'

class FilterMembers extends Component {
  state = {
    loading: true,
    [this.props.url]: []
  }

  componentDidMount () {
    this.fetch = util.wpFetch(this)

    this.fetch(this.props.url)
  }

  render ({ url }, { loading }) {
    return (
      <ul style={{ marginTop: 20 }}>
      {!loading &&
        this.state[url].map(item =>
          <li>{item.name}</li>)}
      </ul>
    )
  }
}

export default FilterMembers
