import React from 'react'

const Map = () => {
    const arr1=["heelo Roomates"]
    const arr=[
        {
            id:1,
            title:"Aijay"
        },
        {
            id:2,
            title:"Santhosh"
        },
        {
            id:3,
            title:"Koushik"
        },
        {
            id:4,
            title:"Room"
        }
    ]
  return (
    <div>
         {
            arr1.map(
                (value1, index) =><h1 key={index}>{value1}</h1>
            )
        }
        {
            arr.map(
                (value) =><li key={value.id}>{value.id} {value.title}</li>
               
            )
        }
       
      
    </div>
  )
}

export default Map
