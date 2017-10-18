import { h } from 'preact'
import CloseButton from './CloseButton'
import FilterGroup from './FilterGroup'

const FilterPanel = ({
  sectors
}) => (
  <div class='filter-panel' onClick={() => document.body.classList.remove('filter-panel--active')}>
    <div class='filter-panel__inner' onClick={evt => evt.stopPropagation()}>
      <div class='filter-panel__transform'>
        <div class='filter-panel__row'>
          <div class='filter-panel__column'>
            <header class='filter-panel__header'>
              <CloseButton onClick={() => document.body.classList.remove('filter-panel--active')} />
              <h4 class='filter-panel__title'>Sectors</h4>
            </header>
            <div class='scroll-area'>
              <ul class={'filter-panel__list'}>
                {sectors.map(parent =>
                  <FilterGroup parent={parent} />
                )}
              </ul>
            </div>
          </div>
          <div class='filter-panel__column'>
            <header class='filter-panel__header'>
              <h4 class='filter-panel__title'>Selected Filters</h4>
            </header>
            <div class='scroll-area'></div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default FilterPanel
