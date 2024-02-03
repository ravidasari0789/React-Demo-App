import React, { useState } from 'react'
import index from './index'
const Calculate=()=>
{
       const[input,setInput]=useState("")
      const handle=e=>{
             setInput(e.target.value)
      }  
      const[result,setResult]=useState(0);
          
    return(
            <center>
                   <input type="text" name="input" value={input} onChange={handle} /><br/>
                   <button onClick={()=>{setResult(eval(input))}}>Result</button><br/>
                   Result Is:{result}<br/>
                   <button onClick={()=>{setInput(input+'1')}}>1</button>
                   <button onClick={()=>{setInput(input+'2')}}>2</button>
                   <button onClick={()=>{setInput(input+'3')}}>3</button>
                   <button onClick={()=>{setInput(input+'4')}}>4</button>
                   <button onClick={()=>{setInput(input+'5')}}>5</button><br/>
                   <button onClick={()=>{setInput(input+'6')}}>6</button>
                   <button onClick={()=>{setInput(input+'7')}}>7</button>
                   <button onClick={()=>{setInput(input+'8')}}>8</button>
                   <button onClick={()=>{setInput(input+'9')}}>9</button>
                   <button onClick={()=>{setInput(input+'0')}}>0</button><br/>
                   <button onClick={()=>{setInput(input+'+')}}>+</button>
                   <button onClick={()=>{setInput(input+'-')}}>-</button>
                   <button onClick={()=>{setInput(input+'*')}}>*</button>
                   <button onClick={()=>{setInput('')}}>clr</button>
            </center>
    )
}
export default Calculate