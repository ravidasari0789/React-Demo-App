import React, {useEffect, useState} from 'react'

const UseState =()=>{
     const[user,setUser]=useState("UseState")
     useEffect(()=>console.log("excuted complted"))
     return(
         <center>
        <h1>{user}</h1>
        <button onClick={()=>setUser("helleo onclick")}>Change</button>
        </center>
     )
}
export default UseState