import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Componente/Header/Header";
import Footer from "./Componente/Footer/Footer";
import Home from "./Componente/Home/Home";
import AboutUs from "./Componente/AboutUs/AboutUs";
import Contact from "./Componente/Contact/Contact";
import LoginPage from "./Componente/Login/LoginPage";
import SignUpPage from "./Componente/SignUp/SignUpPage";
import Profile from "./Componente/Profile/Profile";
import SearchPage from "./Componente/SearchPage/SearchPage";
import SongForm from "./Componente/AddingPage/SongForm";
import SongPage from "./Componente/SongPage/SongPage";
import SoloAuthor from "./Componente/Album/SoloAuthor";

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
          <Route path="/group/:id" element={<SoloAuthor />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addingPage" element={<SongForm />} />
          <Route path="/songPage/:id" element={<SongPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
