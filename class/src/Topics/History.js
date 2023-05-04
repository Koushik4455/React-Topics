import React from 'react'
import {useHistory} from 'react-router-dom'

const History = () => {
    let past=useHistory();
  return (
    <div>
       <h1>Wellome to my world</h1>
      <h2>THis about Redirect</h2>
      <h4> To redirect this page Hit on button</h4>
      <button onClick={()=> past.push('/Fetch')} >Hit me</button>
    </div>
  )
}

export default History
