import { h, Component } from 'preact'
import cache from '../util/cache'

class FilterMembers extends Component {
  state = {
    loading: true,
    [this.props.url]: []
  }

  componentDidMount () {
    this.fetch(this.props.url)
  }

  fetch (url) {
    if (cache.has(url)) {
      this.setState({
        [url]: cache.get(url),
        loading: false
      }, console.log('data loaded from cache'))
    } else {
      fetch(url)
        .then(res => res.json())
        .then(json => {
          cache.set(url, json)
          this.setState({
            [url]: json,
            loading: false
          }, console.log('data loaded from api'))
        })
    }
  }

  render ({ url }, { loading }) {
    return (
      <ul style={{ marginTop: 20 }}>
      {!loading &&
        this.state[url].map(item =>
          <li>{item.name}</li>)
      }
      </ul>
    )
  }
}

export default FilterMembers
