// Custom events
export const WINDOW_RESIZE = 'windowResize'

// Barba events
export const LINK_CLICKED = 'linkClicked'
export const INIT_STATE_CHANGE = 'initStateChange'
export const NEW_PAGE_READY = 'newPageReady'
export const TRANSITION_COMPLETED = 'transitionCompleted'

// Browse Members Preact App constants
export const API_BASE_URL = '/wp-json/wp/v2'
export const SECTORS_URL = `${API_BASE_URL}/sectors/?per_page=99`
export const MEMBERS_URL = `${API_BASE_URL}/firms/?per_page=16`

// TODO: move this to it's own module?
export const visibleMembersURL = ({
  activeFilters
}) => (
  activeFilters.length
    ? `${MEMBERS_URL}&sectors=${activeFilters.join(',')}`
    : MEMBERS_URL
)
