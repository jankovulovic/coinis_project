import Header from "./Componente/Header/Header";
import "./App.css";
import Footer from "./Componente/Footer/Footer";
import TopSection from "./Componente/TopSection/TopSection";
import BigList from "./Componente/BigList/BigList";

function App() {
  return (
    <div className="App">
      <Header />
      <TopSection />
      <BigList numberOfAlbums={5} />
      <Footer />
    </div>
  );
}

export default App;
