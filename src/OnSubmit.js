import React,{useState} from 'react'

      const OnSubmit=()=>{
      const[data,setData]=useState({
          username:'',
          password:'',
      })
      const{username,password}=data;
      const onChange=e=>{
             setData({...data,[e.target.name]:[e.target.value]})
      }
      const onSubmitHndle= e => {
             e.preventDefault();
             console.log(data);
      }
        return( 
                <div>
                  <center>
                  <form onSubmit={onSubmitHndle}>
                  <p>Username</p>
                  <input type="text" name="username" value={username} placeholder="username" onChange={onChange}/>
                  <p>Password</p>
                  <input type="password" name="password" value={password}  placeholder="password" onChange={onChange}/>
                  <br></br>
                  <input type="submit"  value="Submit"/>
                  </form>
                  </center>
                </div>
        )
}
export default OnSubmit