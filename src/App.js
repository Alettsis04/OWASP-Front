import "./App.css";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Menu />
        <Footer />
      </div>
    </div>
  );
}

export default App;
