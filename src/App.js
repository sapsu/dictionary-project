import "./App.css";
import Dictionary from "./Dictionary";
import book from "./images/book.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">
          <img src={book} alt="book" id="book" />
        </header>
        <main className="App-main">
          <Dictionary defaultKeyword="hello" />
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
