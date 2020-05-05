import { IS_LOADING_STATE } from '../actions/types';

const isLoading = (state = true, action) => {
  switch (action.type) {
    case IS_LOADING_STATE:
      return action.isLoading;
    default:
      return state;
  }
}

export default isLoading;