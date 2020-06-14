import React from 'react';
import { Router } from '@reach/router';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import Home from '../pages/Home';
import Results from '../pages/Results';

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Router>
        <Home path="/" />
        <Results path="/search" />
      </Router>
    </ThemeProvider>
  );
}

export default App;
