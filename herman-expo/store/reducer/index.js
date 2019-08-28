const initState = {
  isLoading: false,
  hasError: false,
  token: null,
  loggedUser: null,
  userId: null,
  errorMessage: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'LOADING':
      return state = {
        ...state,
        isLoading: action.payload
      }
    case 'SIGN_IN':
      return state =  {
        ...state,
        userId: action.payload
      }
    case 'HAS_ERROR':
      return state = {
        ...state,
        hasError: true,
        errorMessage: action.payload
      }
    case 'FETCH_DASHBOARD':
      return state = {
        ...state,
        loggedUser: action.payload
      }
    default:
      break;
  }
  return state
};
