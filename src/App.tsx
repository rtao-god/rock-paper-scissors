import React, { useRef, useState } from "react"
import './App.css';
import Buttons from './components/Buttons'
import img from './assets/screenshots/title/Rock-paper-scissors.png'

interface IBooleanSteps {
  second: boolean;
  third: boolean;
}

function App() {
  const [booleanSteps, setBooleanSteps] = useState<IBooleanSteps>({ second: false, third: false })

  const circlesRef = useRef(null)

  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="SlackeyFontImg" alt="" />
        <p> Connect your Telegram to start the game </p>

        <div ref={circlesRef} className='steps'>
          <div style={{ backgroundColor: "#ffbc48" }}></div>

          {booleanSteps.second
            ? <div style={{ background: "#ffbc48" }}></div>
            : <div style={{ background: "#a0592a" }}></div>

          }
          {booleanSteps.third
            ? <div style={{ backgroundColor: "#ffbc48" }}></div>
            : <div style={{ backgroundColor: "#a0592a" }}></div>
          }
        </div>

        <Buttons setBooleanSteps={setBooleanSteps} />
      </header>
    </div>
  )
}

export default App
