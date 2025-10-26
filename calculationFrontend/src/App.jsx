import React from 'react';
import MainCard from './components/MainCard';
import CalculationForm from './components/CalculationForm';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <MainCard>
        <CalculationForm />
      </MainCard>
    </div>
  );
}

export default App;
