import React, { useEffect, useRef } from 'react'

const Useref = () => {
    const data =useRef()
    const submitHandler = e =>{
        e.preventDefault();
        console.log(data.current.value)
    }
    useEffect (()=>{
        data.current.focus();

    },[])
  return (
    <div>
        <center>
        <form onSubmit={submitHandler}>
            <input ref={data} type='text' placeholder='Exnter Your Name' />
            <br />
            <input type='submit' />
        </form>
        </center>
        
    </div>
  )
}

export default Useref
