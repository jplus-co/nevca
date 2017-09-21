import { h } from 'preact'

const FilterCheckbox = ({
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
  />
)

export default FilterCheckbox
