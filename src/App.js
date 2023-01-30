import "./App.css";
import Dictionary from "./Dictionary";
import dictionary from "./images/dictionary.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">
          <img src={dictionary} alt="" width="200" />
        </header>
        <main className="App-main">
          <Dictionary />
        </main>
        <footer className="App-footer text-center">
          Coded by Saana Ahonen
        </footer>
      </div>
    </div>
  );
}

export default App;
