import "./App.css";
import "./w3css.css";
import "./table.css";
import Main from "./comps/Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TodoList</h1>
      </header>
      <section className="App-section">
        <Main />
      </section>
    </div>
  );
}

export default App;
