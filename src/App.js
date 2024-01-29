import React, {Component} from 'react'
import Display from './display'

export default class App extends Component{
      state={
                name:"ravi",
                email:"ravi.ursme@gmail.com",
                address:"bangalore",
                phno:991773982,
      }
       render(){

            return(
              <div>
                <Display name={this.state.name} email={this.state.email} address={this.state.address} phno={this.state.phno}  />
              </div>
            )
       }
}