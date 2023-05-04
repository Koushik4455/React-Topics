import React, { useState } from 'react'
import {Redirect} from 'react-router'

const Dedirect = () => {
    const[auth,setAuth]=useState(false)
    if(auth){
        return <Redirect to="/Formvalidation"/>
    }
  return (
    <div>
      <h1>Wellome to my world</h1>
      <h2>THis about Redirect</h2>
      <h4> To redirect this page Hit on button</h4>
      <button onClick={()=> setAuth(true)}>Hit me</button>
    </div>
  )
}

export default Dedirect
