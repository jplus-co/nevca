import { h } from 'preact'
import FilterControl from '../containers/FilterControlContainer'

const FilterGroup = ({
  parent
}) => (
  <li class={'filter-group filter-group--industry'} key={parent.id}>
    <FilterControl {...parent} isParent>
      {parent.name}
    </FilterControl>
    <ul class='filter-group filter-group--sector'>
      {parent.children.map(child =>
        <FilterControl {...child}>
          {`${child.name} (${child.count})`}
        </FilterControl>
      )}
    </ul>
  </li>
)

export default FilterGroup
