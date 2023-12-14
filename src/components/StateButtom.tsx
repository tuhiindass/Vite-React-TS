import React, { useEffect, useState } from 'react'

function StateButtom() {
    const [counter,setCounter] = useState(0)

    useEffect(()=>{
        alert('Reload')

    })
  return (
    <div>
        <center>
        <button onClick={()=> setCounter((prevCount)=> prevCount-1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={()=> setCounter((prevCount)=> prevCount+1)}>+</button>
        </center>
        
    </div>
  )
}

export default StateButtom