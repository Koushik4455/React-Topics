import React from 'react'
import Contextc from './Contextc'

export const userContext =React.createContext();

const ContextA = () => {
  return (
    <div>
        <userContext.Provider value={'This is usecontex topic'}>
        <Contextc />
        </userContext.Provider>
        
      
    </div>
  )
}

export default ContextA
