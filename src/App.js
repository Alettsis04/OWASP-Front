import "./App.css";
import Calculadora from "./components/Calculadora";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Navbar />
        <Menu />
        {/* Lógica de la aplicación */}

        <div className="content-wrapper" style={{ minHeight: "1518.06px" }}>
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <Calculadora />
            </div>
            {/* /.container-fluid */}
          </section>
          {/* Main content */}
          <section className="content">
            <div className="container-fluid"></div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
