import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

import ImageGallery from './ImageGallery'

const App = () => {
  return (
    <Provider store={store}>
      <ImageGallery />
    </Provider>
  )
};

export default App;

