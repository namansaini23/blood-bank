import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import AdPage from "./pages/AdPage";
import Footer from './components/Footer';
function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/adpage' element={<AdPage/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
