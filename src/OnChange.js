import React,{useState, UseState} from 'react'

const OnChange=()=>{
       const[user,setUser]=useState("");
       const handle=e=>{
              setUser(e.target.value);
       }
        return(
              <center>
                  
              <input type="text" placeholder="username" value={user} name="user" onChange={handle} />
              <br/>
              <h1>{user}</h1>
              </center>
           
                
        )
}

export default OnChange