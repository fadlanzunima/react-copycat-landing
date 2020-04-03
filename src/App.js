import React from 'react';
import './App.css';
import './navbar/Navbar';
import Navbar from './navbar/Navbar';
import FirstSection from './first-section/FirstSection'


function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstSection />
    </div>
  );
}

export default App;
