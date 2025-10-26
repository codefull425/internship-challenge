import React from 'react';
import Header from './components/Header';
import MainCard from './components/MainCard';
import CalculationForm from './components/CalculationForm';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <MainCard>
        <CalculationForm />
      </MainCard>
    </div>
  );
}

export default App;
