import React from 'react';
import { Router } from '@reach/router';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import Home from '../pages/Home';
import Results from '../pages/Results';
import { QueryProvider } from '../store';

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <QueryProvider>
        <Router>
          <Home path="/" />
          <Results path="/search" />
        </Router>
      </QueryProvider>
    </ThemeProvider>
  );
}

export default App;
