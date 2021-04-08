import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <main>
        <Dictionary default="nature" />
      </main>
      <footer className="App-footer">
        <a
          href="https://github.com/ana-coimbra/shecodes-react-dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code{" "}
        </a>
        by{" "}
        <a
          href="https://www.linkedin.com/in/ana-ribeiro-coimbra/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Ana Coimbra
        </a>
      </footer>
    </div>
  );
}
