import { Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/view/Footer/Footer';
import About from './components/view/About/About';
import Header from "./components/view/Header/Header";
import Home from "./components/view/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
    );
}

export default App;