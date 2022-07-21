import './App.css';
import { useState } from 'react'
import Fighter from "./components/Fighter"
import FighterScreen from "./components/FighterScreen"

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

  const [selectedFighter, setSelectedFighter] = useState()
  const handleClick = (element) => {
      setSelectedFighter(element.name)
  }

  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        {
          fighters.map((element, index) => {
            return(
              <Fighter fighter={element} setSelectedFighter={setSelectedFighter}/>
            )
          })
        }
      </div>
      {
        selectedFighter ? <FighterScreen /> : undefined
      }
    </div>
  );
}

export default App;
