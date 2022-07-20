import './App.css';
import Fighter from "./components/Fighter"

function App() {
  const fighters = [
    {name: 'Roy', color: 'blue'},
    {name: 'Ganondorf', color: 'brown'},
    {name: 'Mario', color: 'lightskyblue'},
    {name: 'Lucina', color: 'purple'},
    {name: 'Marth', color: 'dodgerblue'},
    {name: 'Link', color: 'gray'},
    {name: 'Inkling', color: 'orange'},
    {name: 'Samus', color: 'gold'},
    {name: 'Fox', color: 'mediumseagreen'},
    {name: 'Sheik', color: 'coral'},
    {name: 'Zelda', color: 'midnightblue'},
    {name: 'Ken', color: 'firebrick'}
  ]
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
