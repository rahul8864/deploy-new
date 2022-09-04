import React, { useState } from 'react'
import './App.css'
import Start from './components/Start'
import Quiz from './components/Quiz'

function App() {

  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(0)

  return (
    <div className="quiz">
    <nav className="" style={{height:"60px", background:"red",display:"flex"}}>
      {start? <h3 style={{display:"flex",alignItems:"center", marginLeft:"15px"}}>{end}/5</h3>:<h3 style={{display:"flex",alignItems:"center", marginLeft:"15px"}}>IQ Test</h3>}
    </nav>
      { start ? <Quiz onClick={data => setEnd(data)}/> : <Start props={setStart} />} 

      {start ? <progress value={end} max={"5"}></progress> :" "}
    </div>
  );
}

export default App;
