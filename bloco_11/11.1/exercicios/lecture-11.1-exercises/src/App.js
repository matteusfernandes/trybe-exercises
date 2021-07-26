import './App.css';

const compromissos = ['Acordar', 'Escovar os dentes', 'Tomar Café da Manhã', 'Tomar Banho', 'Trabalhar'];

const Task = (value) => {
  return (
    <li>{value}</li>
    );
  }
  
  function App() {
  return (
    compromissos.map((compromisso) => Task(compromisso))
  );
}

export default App;
