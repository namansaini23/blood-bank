import './App.css';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Donors" element={<Donor />}/>
        <Route path="/Recepients" element={<Recepient />}/>
        <Route path="/Form" element={<Form />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
