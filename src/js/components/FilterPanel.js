import { h } from 'preact'
import FilterGroup from './FilterGroup'

const FilterPanel = ({
  sectors
}) => (
  <ul style={{ flexBasis: '25%', marginTop: 20, marginRight: 20 }}>
    {sectors.map(parent =>
      <FilterGroup parent={parent} />
    )}
  </ul>
)

export default FilterPanel
