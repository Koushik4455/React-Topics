import React, { useState } from 'react'

const Usestate = () => {
    const[name,setName]=useState("")
    const[count,setCount]=useState(0)
  return (
    <div>
        <h1>{name}</h1>
      <button onClick={()=>setName("How dare you to touch me")}>Touch Me</button>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count+1)}>Increment</button><button onClick={()=> setCount(count-1)}>Decrement</button>

    </div>
  )
}

export default Usestate
