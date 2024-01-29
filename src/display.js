import React, {Component} from 'react'

export default class Display extends Component{

    render(){

        return(
           <table >
                  <thead>
                          <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>address</th>
                          <th>phno</th>
                          </tr>
                  </thead>
                  <tbody>
                           <tr>
                            <td>{this.props.name}</td>
                           
                            <td>{this.props.email}</td>
                          
                            <td>{this.props.address}</td>
                           
                            <td>{this.props.phno}</td>
                           </tr>

                  </tbody>

           </table>
        )
    }
}