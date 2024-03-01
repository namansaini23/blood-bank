import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
