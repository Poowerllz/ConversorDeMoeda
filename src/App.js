import React from 'react';
import Conversor from './components/Conversor';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
          <h1 className="name">Conversor de moedas</h1>
          <div className='Lista'>
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className='Lista2'>
      <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
      </div>
      <div className='Lista3'>
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
    </div>
  );
}

export default App;
