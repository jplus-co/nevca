import { h, Component } from 'preact'
import FilterCheckbox from './FilterCheckbox'

class FilterControl extends Component {
  onClick = id => ({ target }) => {
    const { isParent, sectors, addFilter, removeFilter } = this.props

    if (isParent) {
      const children = sectors.filter(sector => sector.parent === id || sector.id === id)
      children.map(child => target.checked ? addFilter(child.id) : removeFilter(child.id))
    } else {
      target.checked
        ? addFilter(id)
        : removeFilter(id)
    }
  }

  render ({ id, isParent, slug, children }, state) {
    return (
      <li class={`filter filter--${isParent ? 'industry' : 'sector'}`}>
        <label class='filter__hit-area' htmlFor={slug}>
          <FilterCheckbox {...this.props} onClick={this.onClick(id)} align='vertical' />
          <span class='filter__checkbox'></span>
          <span class='filter__label' dangerouslySetInnerHTML={{ __html: children }}></span>
        </label>
      </li>
    )
  }
}

export default FilterControl
