import { Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/view/Footer/Footer';
import About from './components/view/About/About';
import Header from "./components/view/Header/Header";
import Home from "./components/view/Home/Home";
import Login from "./components/view/Login/Login";
import Register from "./components/view/Register/Register";
import Logout from "./components/view/Logout/Logout";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer/UseReducer";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{state, dispatch}}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </UserContext.Provider>
    );
}

export default App;