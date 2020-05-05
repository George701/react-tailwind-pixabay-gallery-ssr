import { FETCH_IMAGES } from '../actions/types';

const images = (state = [], action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return action.images;
    default:
      return state;
  }
}

export default images;