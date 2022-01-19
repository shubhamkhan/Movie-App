import { Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/view/Footer/Footer';
import About from './components/view/About/About';
import Header from "./components/view/Header/Header";
import Home from "./components/view/Home/Home";
import Login from "./components/view/Login/Login";
import Register from "./components/view/Register/Register";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
    );
}

export default App;