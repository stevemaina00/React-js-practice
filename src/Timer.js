import { useState } from "react";
import '../src/App.css'

function Timer(){
    const[count, setCount]=useState(0)
    const[color, setColor]=useState("I am green")
 
  
  return(
    <div className="Timer">
      <button onClick={() => setCount(count + 1)} >button</button>
      <p>{count} likes</p>
      <button onClick={() => setColor("Thank you :)")} >Click me</button>
      <p>{color}</p>
    </div>
  )

  }
  export default Timer
  