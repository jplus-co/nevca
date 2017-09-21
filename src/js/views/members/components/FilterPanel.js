import { h } from 'preact'
import FilterGroup from './FilterGroup'

const FilterPanel = ({
  sectors
}) => (
  <ul class={'filter-panel'}>
    {sectors.map(parent =>
      <FilterGroup parent={parent} />
    )}
  </ul>
)

export default FilterPanel
