import React from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import store from './store';
import Home from '../pages/Home';
import Results from '../pages/Results';

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Provider store={store}>
        <Router>
          <Home path="/" />
          <Results path="/search" />
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
