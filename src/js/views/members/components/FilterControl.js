import { h } from 'preact'

const FilterControl = ({
  id,
  isParent,
  children,
  style
}) => {
  const WrapperTagname = isParent ? 'h3' : 'span'
  return (
    <label htmlFor={`filter-checkbox-${id}`}
        style={Object.assign({}, style, { display: 'block', cursor: 'pointer' })}>
      <input style={{marginRight: 5}} type='checkbox' id={`filter-checkbox-${id}`} value={id} />
      <WrapperTagname style={{ userSelect: 'none', marginBottom: 10, display: 'inline-block' }}>
        {children}
      </WrapperTagname>
    </label>
  )
}

export default FilterControl
