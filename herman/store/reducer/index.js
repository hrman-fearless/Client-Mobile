const initState = {
  isLoading: false,
  token: null,
  loggedUser: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'LOADING':
      return state = {
        ...state,
        isLoading: action.payload
      }
      break;
    case 'SIGN_IN':
      return state =  {
        ...state,
        loggedUser: action.payload
      }
    default:
      break;
  }
  return state
};
