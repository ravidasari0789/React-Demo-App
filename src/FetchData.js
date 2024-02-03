import React,{useEffect, useState} from 'react'

const FetchData=()=>{
    const[data,setData]=useState([])
    useEffect(()=>{
           fetch('https://jsonplaceholder.typicode.com/todos').then(
               response=>response.json()
           ).then(response=>setData(response))
    },[])
     return(

        <h1>{data.map(item=><li key={item.id}>{item.title}</li>)}</h1>
     )
}
export default FetchData