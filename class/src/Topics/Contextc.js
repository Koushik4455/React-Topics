import React from 'react'
import {userContext}from './ContextA'
const Contextc = () => {
  return (
    <div>
      <center>
        <userContext.Consumer>
            {value =><div className='usecontxt'><b>{value}</b></div>}
        </userContext.Consumer>
      </center>
    </div>
  )
}

export default Contextc
