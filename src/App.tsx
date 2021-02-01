import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import WsbContainer from './components/wsb/WsbContainer'
import CalculatorContainer from './components/calculator/CalculatorContainer';



function App() {
  return (
    <div>
      <WsbContainer/>
      <CalculatorContainer/>
    </div>
  );
}

export default App;
