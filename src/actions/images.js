import axios from 'axios';
import { FETCH_IMAGES, IS_LOADING_STATE } from './types';

export const fetchImages = (term) => async dispatch => {
  dispatch({
    type: IS_LOADING_STATE,
    isLoading: true
  });
  try {
    let res = await axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`);
    dispatch({
      type: FETCH_IMAGES,
      images: res.data.hits
    })
    dispatch({
      type: IS_LOADING_STATE,
      isLoading: false
    });
  } catch (error) {
    dispatch({
      type: IS_LOADING_STATE,
      isLoading: false
    });
    console.error(error.message);
  }
};