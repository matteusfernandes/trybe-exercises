import React from 'react';
import './App.css';
import PersonalData from './components/PersonalData'
import LastJob from './components/LastJob'

function App() {
  return (
    <form>
      <PersonalData />
      <LastJob />
    </form>
  );
}

export default App;
