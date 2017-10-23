import { h } from 'preact'

const SelectedFilter = ({
  sector,
  removeFilter
}) => (
  <li class='selected-filter'>
    <button
      class='selected-filter__button'
      onClick={() => removeFilter(sector.id)}
    >
      <span
        class='selected-filter__icon'></span>
      <span
        class='selected-filter__label'
        dangerouslySetInnerHTML={{__html: sector.name}}></span>
    </button>
  </li>
)

export default SelectedFilter
