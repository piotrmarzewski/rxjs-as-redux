export default function reducer(state, action) {
  switch (action.type) {
    case 'GITHUB_FOLLOWERS_LOADING':
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case 'GITHUB_FOLLOWERS_LOADED':
      return {
        ...state,
        isLoading: false,
        users: action.payload,
        error: ''
      };
    case 'NAME_CHANGED':
      return {
        ...state,
        // isLoading: false,
        name: action.payload,
        users: [],
        error: ''
      };
    case 'AJAX_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
