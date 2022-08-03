import React from 'react';
import Header from './components/Header';
import './App.css';
import Form from './components/Form';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <Form movies={ movies } />
    </div>
  );
}

export default App;
