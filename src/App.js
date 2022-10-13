// import React, { useState } from 'react';
// import Condition from './Condition';
// import List from './List';
import Layout from './Layout';
import Timer from './Timer';


import Form from './Form';
import '../src/App.css'
function App(){
//  const[count, setCount]=useState(0)
//  function Add(){
//   setCount(count + 1)
//  }
  return(
    <div>
      {/* <p>{count}</p>
      <button onClick={Add}>Click</button>
      <Condition /> */}
      {/* <List /> */}
      <Form />
      <Layout />
      <Timer />
  
  

    </div>
  )
}
export default App;