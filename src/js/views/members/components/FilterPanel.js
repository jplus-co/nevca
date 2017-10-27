import { h } from 'preact'
import CloseButton from './CloseButton'
import FilterGroup from './FilterGroup'
import SelectedFilter from './SelectedFilter'

const FilterPanel = ({
  sectors,
  filters,
  fetchMembers,
  removeFilter,
  clearFilters
}) => {
  const sectorTree = createSectorTree(sectors)
  return (
    <div class='filter-panel' onClick={() => document.body.classList.remove('filter-panel--active')}>
      <div class='filter-panel__inner' onClick={evt => evt.stopPropagation()}>
        <div class='filter-panel__transform'>
          <div class='filter-panel__row'>
            <div class='filter-panel__column'>
              <header class='filter-panel__header'>
                <CloseButton onClick={() => {
                  document.body.classList.remove('filter-panel--active')
                  fetchMembers()
                }} />
                <h4 class='filter-panel__title'>Sectors</h4>
              </header>
              <div class='scroll-area'>
                <ul class={'filter-panel__list'}>
                  {sectorTree.map(parent =>
                    <FilterGroup parent={parent} />
                  )}
                </ul>
              </div>
            </div>
            <div class='filter-panel__column'>
              <header class='filter-panel__header'>
                <h4 class='filter-panel__title'>Selected Filters</h4>
              </header>
              <div class='scroll-area px-3'>
                {filters.length ? (
                  <button
                    class="filter-panel__unselect-all-button"
                    onClick={clearFilters}>
                    Unselect all
                  </button>
                ) : null}
                {filters.length ? (
                  <ul class='filter-panel__list'>
                    {filters.map((id, i) => sectors.find(sector => sector.id === id))
                      .map(sector => (
                        <SelectedFilter
                          key={sector.id}
                          sector={sector}
                          removeFilter={removeFilter}
                        />
                      ))
                    }
                  </ul>
                ) : (
                  <p class="filter-panel__text">No filters selected.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterPanel

const createSectorTree = json => (
  json
  .filter(sector => sector.parent === 0)
  .map(parent => ({
    ...parent,
    // Get child sectors of parent industry and spread into a new object
    children: json.filter(sector => sector.parent === parent.id)
  }))
)
