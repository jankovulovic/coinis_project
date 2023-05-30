import Header from "./Componente/Header/Header";
import Footer from "./Componente/Footer/Footer";
import Home from "./Componente/Home/Home";
import AboutUs from "./Componente/AboutUs/AboutUs";
import Contact from "./Componente/Contact/Contact";
import List from "./Componente/List/List";
// import Login from "./Componente/Login/Login";
import SignInSide from "./Componente/SignIn/SignInSide";
import SignUp from "./Componente/SignUp/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/list" element={<List />} />
          <Route path="/grupa" element={<List />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/signin" element={<SignInSide />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
