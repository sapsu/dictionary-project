import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">
          <img src={logo} alt="logo" id="logo" />
          <h1 className="text-center mb-4">Dictionary</h1>
        </header>
        <main className="App-main">
          <Dictionary defaultKeyword="day" />
        </main>
        <footer className="App-footer text-center">
          <a
            href="https://github.com/sapsu/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced code
          </a>
          {` `}
          by Saana Ahonen
        </footer>
      </div>
    </div>
  );
}

export default App;
