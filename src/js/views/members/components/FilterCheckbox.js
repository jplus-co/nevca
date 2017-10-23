import { h } from 'preact'

const FilterCheckbox = ({
  filters,
  id,
  slug,
  onClick
}) => (
  <input
    onClick={onClick}
    class='filter__checkbox-control'
    type='checkbox'
    id={slug}
    value={id}
    checked={filters.find(filter => filter === id) ? true : false}
  />
)

export default FilterCheckbox
