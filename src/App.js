import Header from "./Componente/Header/Header";
import Footer from "./Componente/Footer/Footer";
import Home from "./Componente/Home/Home";
import AboutUs from "./Componente/AboutUs/AboutUs";
import Contact from "./Componente/Contact/Contact";
import LoginPage from "./Componente/Login/LoginPage";
import SoloAlbum from "./Componente/Album/SoloAlbum";
import SignUpPage from "./Componente/SignUp/SignUpPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import ProfilePage from "./Componente/ProfilePage/ProfilePage";
import SearchPage from "./Componente/SearchPage/SearchPage";
import AddingPage from "./Componente/AddingPage/AddingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/grupa" element={<SoloAlbum />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/addingPage" element={<AddingPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
