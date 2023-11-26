import './App.css';
import Main from './components/Main';
import React from 'react';
import image from './assets/budgetpal.png';

function App() {
  return (
    <div className="container">
      <div className="centered-content">
       <img src={image} alt="BudgetPal Logo" className="logo" />
        <h1>BudgetPal</h1>
      </div>
      <Main />
    </div>
  );
}

export default App;
