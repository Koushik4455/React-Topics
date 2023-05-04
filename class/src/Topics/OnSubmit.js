import React, { useState } from 'react'

const OnSubmit = () => {
    const [data,setData]=useState({
        user:'',
        password:'',
    })
    const {user,password}= data;
    const handler = e =>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler = e =>{
        e.preventDefault();
        console.log(data);
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
      <input type='text' placeholder='username' value={user} name='user' onChange={handler}/>
      <br/>
      <input type='password' placeholder='password' value={password} name='password' onChange={handler}/>
      <br/>
      <input type='submit' name='submit'/>
      <br/>
      </form>
    
    </div>
  )
}

export default OnSubmit
