import { Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/view/Footer/Footer';
import Main from './components/view/Main/Main';
import About from './components/view/About/About';
import Header from "./components/view/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
    );
}

export default App;