import React from 'react';
import './App.css';
import PersonalData from './components/PersonalData'
import LastJob from './components/LastJob'
import Buttons from './components/Buttons'

function App() {
  return (
    <form>
      <PersonalData />
      <LastJob />
      <Buttons />
    </form>
  );
}

export default App;
