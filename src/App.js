import Header from "./Componente/Header/Header";
import Footer from "./Componente/Footer/Footer";
import Home from "./Componente/Home/Home";
import AboutUs from "./Componente/AboutUs/AboutUs";
import Contact from "./Componente/Contact/Contact";
import SignInSide from "./Componente/SignIn/SignInSide";
import SignUp from "./Componente/SignUp/SignUp";
import SoloAlbum from "./Componente/Album/SoloAlbum";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import SearchPage from "./Componente/SearchPage/SearchPage";

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

          {/* <Route path="/acords" element={<Acords />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/login" element={<SignInSide />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
