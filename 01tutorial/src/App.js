import logo from "./logo.svg";
import "./App.css";

function App() {
  const randomName = () => {
    const names = ["Dave", "Atanu", "Bob", "Kevin"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {randomName()}!</p>
      </header>
    </div>
  );
}

export default App;
