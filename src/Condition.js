import React from 'react'
function Score(){
    return(
        <div>
            <h1>CR7</h1>
            <h2>AS21</h2>
        </div>
    )
}
function Noscore(){
    return(
        <div>
            <h1>HAL9</h1>
        </div>
    )
}

function Condition(){
    const isScore=true;
  return (
    <div>
    {isScore ? <Score />:<Noscore />}
    </div>
  )
}

export default Condition;;