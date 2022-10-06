import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './data/theme';

import './App.css';
import {Event} from './components/event/Event';
import {Tour} from './components/recommendation/Tour';
import {HeaderNav} from './components/navigation/components/HeaderNav';
import Reservation from './components/flight-check/Reservation';
import AffIcon from './components/aliance/AffIcon';

import flights from './data/flights';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HeaderNav />
        <Reservation />
        <AffIcon />
        <Event />
        <Tour flights={flights} />
      </ThemeProvider>
    </>
  );
}

export default App;
