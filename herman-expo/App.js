import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import Navigation from './containers/navigation';

export default App = () => {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  )
}