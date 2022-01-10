import { useState } from 'react'
import './App.css'
import Shop from './components/Shop'


function App() {

  const [solde, setSolde] = useState (0);
  const [pannier, setPannier] = useState (0);
  
  
const addEvent = (prix) => {
  setSolde(solde + parseInt(prix) );
  setPannier( pannier => pannier +1);

  
}

const msg = (e)=>{
alert ('OK')
}


  return (
    <div className="App">
      <h1>Ecomerce Site Web</h1>
      <div style={{textAlign : 'right', margin : '2rem'}}>
      <p>Solde <br /> {solde}</p>
      <p>Pannier <br /> {pannier}</p>
      <button style ={{color: 'blue'}} onClick={msg}>Confirmer la commande</button>
      </div>

      <div className='shop' >
      <Shop title='pc portable MacBook 2020' prix='122 euro' addEvent={addEvent}  />
      <Shop title='Iphone 12 RED' prix='150 euro' addEvent={addEvent}  />
      <Shop title='Galaxy' prix='80 euro' addEvent={addEvent} />
      <Shop title='pc portable MacBook 2020' prix='122 euro' addEvent={addEvent} />
      <Shop title='Iphone 12 RED' prix='122 euro' addEvent={addEvent} />
      <Shop title='Galaxy' prix='80 euro' addEvent={addEvent} />
      
      </div>

    </div>
  )
}

export default App;
