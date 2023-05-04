import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const[count,setCount]=useState(0)
    useEffect(()=> console.log(count),[count])
  return (
    <div>
        <h1>You Have Clicked on Button {count} Times</h1>
        <button onClick={()=>setCount(count+1)}>Clicked</button>
      
    </div>
  )
}

export default UseEffect
