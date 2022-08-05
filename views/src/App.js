import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Marketplace from './components/Marketplace/Marketplace';

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import React from 'react';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/marketplace' element={< Marketplace />}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
