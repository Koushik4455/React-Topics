import React from 'react'

const Filter = () => {
    const arr=[10,20,30,40,50,60]
    const filterd =arr.filter(item=>item>20)
    const name=["naveen","anil","anwar"]
    const frilterd1=name.filter(name=>name.includes('a'))
  return (
    <div>
      {
        filterd.map(
            (item,index)=><li key={index}>{item}</li>
        )
      }
      {
        frilterd1.map(
            (name,index)=><li key={index}>{name}</li>
        )
      }
    </div>
  )
}

export default Filter
