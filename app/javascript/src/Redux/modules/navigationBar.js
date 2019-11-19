const initialState = {
  home: 'inactive',
  overview: 'inactive',
  origins: 'inactive',
  classes: 'inactive',
  items: 'inactive',
  sidebarStatus: 'invisible',
  sidebarVisible: false
}

const navigationBar = (state = initialState, action) => {
  switch(action.type) {
    case HANDLE_CURRENT_PAGE:
      switch(action.location) {
        case '/':
          return {...state, home: 'active', overview: 'inactive', origins: 'inactive', classes: 'inactive', items: 'inactive', news: 'inactive' }
        case '/champions/overview':
          return {...state, home: 'inactive', overview: 'active', origins: 'inactive', classes: 'inactive', items: 'inactive', news: 'inactive' }
        case '/champions/origins':
          return {...state, home: 'inactive', overview: 'inactive', origins: 'active', classes: 'inactive', items: 'inactive', news: 'inactive' }
        case '/champions/classes':
          return {...state, home: 'inactive', overview: 'inactive', origins: 'inactive', classes: 'active', items: 'inactive', news: 'inactive' }
        case '/items':
          return {...state, home: 'inactive', overview: 'inactive', origins: 'inactive', classes: 'inactive', items: 'active', news: 'inactive' }
        default:
          return state
      }
    case HANDLE_SIDEBAR_CLICK:
      if (state.sidebarStatus === 'invisible') {
        return {...state, sidebarStatus: 'visible', sidebarVisible: true }
      } else {
        return {...state, sidebarStatus: 'invisible', sidebarVisible: false }
      }
    case HANDLE_SIDEBAR_OUTSIDE_CLICK:
      if (!action.eventClass.includes('NavigationBar-sidebar')) {
        return {...state, sidebarStatus: 'invisible', sidebarVisible: false }
      }
    default:
      return state
  }
}

const HANDLE_CURRENT_PAGE = 'HANDLE_CURRENT_PAGE'
const handleCurrentPage = () => {
  return {
    type: HANDLE_CURRENT_PAGE,
    location: window.location.pathname
  }
}

const HANDLE_SIDEBAR_CLICK = 'HANDLE_SIDEBAR_CLICK'
const handleSidebarClick = () => {
  return {
    type: HANDLE_SIDEBAR_CLICK
  }
}

const HANDLE_SIDEBAR_OUTSIDE_CLICK = 'HANDLE_SIDEBAR_OUTSIDE_CLICK'
const handleSidebarOutsideClick = (eventClass) => {
  return {
    type: HANDLE_SIDEBAR_OUTSIDE_CLICK,
    eventClass: eventClass
  }
}

export {
  navigationBar,
  handleCurrentPage,
  handleSidebarClick,
  handleSidebarOutsideClick
}
