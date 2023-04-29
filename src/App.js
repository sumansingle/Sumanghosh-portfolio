import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Works from './components/Works/Works';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
