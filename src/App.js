import './App.css';
import Fighter from "./components/Fighter"

function App() {
  const fighters = ['Roy', 'Ganondorf', 'Mario', 'Luigi', 'Marth', 'Link', 'Inkling', 'Samus', 'Fox', 'Sheik', 'Zelda', 'Ken']
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        {
          fighters.map((element, index) => {
            return(
              <Fighter fighter={element} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
