import { h, Component } from 'preact'
import FilterCheckbox from './FilterCheckbox'

class FilterControl extends Component {
  onClick = id => ({ target }) => {
    target.checked
      ? this.props.addFilter(id)
      : this.props.removeFilter(id)
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
