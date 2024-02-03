import React, { useState } from 'react'

const LoginForm =()=>{
    const[loginform,setloginform]=useState(
        {
            username:'',
            password:'',
        }
    )
    const{username,password}=loginform;
    const onChange=e=>{
        setloginform({...loginform,[e.target.name]:[e.target.value]})
    }
    const onSubmit=data=>{
           data.preventDefault();
           console.log(loginform);
    }
       return(
            <div>
            <center>
            <form onSubmit={onSubmit}>
                     <p>UserName</p>
                    <input type="text" name="username" value={username} placeholder="enter username" onChange={onChange}/>
                    <p>Password</p>
                    <input type="password" name="password" value={password} placeholder="enter Password" onChange={onChange}/><br/>
                    <input type="submit" value="Submit"/>
            </form>
            </center>
            </div>
       )
}
export default LoginForm