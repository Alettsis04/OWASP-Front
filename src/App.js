import "./App.css";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h2>Admin LTE</h2>
        <Navbar />
        <Menu />
      </div>
    </div>
  );
}

export default App;
