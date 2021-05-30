import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <header className="App-header">
        <h1>Hi, my name is Grace</h1>
      </header> */}
      <About />
    </div>
  );
}

export default App;
