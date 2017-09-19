import { h, Component } from 'preact'
import util from '../util'

// adds support for react devtool browser extension
require('preact/debug')

class BrowseMembers extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: true,
      sectorData: []
    }
  }

  componentDidMount () {
    util.fetch(this.props.url)
      .then(this.createSectorData)
      .then(this.ready)
  }

  createSectorData = json => (
    json
    .filter(sector => sector.parent === 0)
    .map(parent => Object.assign({}, parent, {
      // Get subsectors of parent sector and assign to new object
      children: json.filter(sector => sector.parent === parent.id)
    }))
  )

  ready = sectorData => this.setState({
    loading: false,
    sectorData
  })

  render (props, { loading, sectorData }) {
    return (
      <ul class='filter-container' style={{ marginTop: 20 }}>
        {!loading &&
          sectorData.map(parent =>
            <li class='filter-group' style={{ marginBottom: 20 }} key={parent.id}>
              <h4 style={{ marginBottom: 10 }}>{parent.name}</h4>
              <ul>
                {parent.children.map(child =>
                  <li data-id={child.id} key={child.id}>{child.name}</li>)}
              </ul>
            </li>
          )
        }
      </ul>
    )
  }
}

export default BrowseMembers
