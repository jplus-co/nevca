import { h } from 'preact'
import FilterControl from './FilterControl'

const FilterGroup = ({
  parent
}) => (
  <li style={{ marginBottom: 20 }} key={parent.id}>
    <FilterControl {...parent} isParent>
      {parent.name}
    </FilterControl>
    <ul>
      {parent.children.map(child =>
        <FilterControl {...child} style={{ paddingLeft: 10 }}>
          {`${child.name} (${child.count})`}
        </FilterControl>
      )}
    </ul>
  </li>
)

export default FilterGroup
