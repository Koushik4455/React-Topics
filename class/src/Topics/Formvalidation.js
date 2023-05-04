import React, { useState } from 'react'

const Formvalidation = () => {
    const [data,setData]=useState(
       { 
        username:'',
        password:'',
        conform:'',
        email:'',
    }
    )
    const {username,password,conform,email}=data;
    const handler = e =>{
        setData({...data, [e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault()
        if(username.length <=3){
            alert("username must be 3 charaters")
        }
        else if(password !== conform){
            alert("password not matched")
        }
        else{
            console.log(data)
        }
       
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='Enter User Name' value={username} name='username' onChange={handler} />
        <input type='email' placeholder='Enter Gmail' value={email} name='email' onChange={handler}/>
        <input type='Password' placeholder='Enter Password' value={password} name='password' onChange={handler} />
        <input type='password' placeholder='Enter Conform Password' value={conform} name='conform'  onChange={handler} />
        <br/>
        <input type='Submit' />
      </form>
    </div>
  )
}

export default Formvalidation
