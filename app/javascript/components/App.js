import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './Greeting';
import store from '../redux/store';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Greeting />} />
            <Route path="*" element={<div>Ooops!</div>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
