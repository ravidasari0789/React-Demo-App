import React, {Component} from 'react'

export default class Onclick extends Component{

    render(){

        return(
            <button onclick={()=>console.log("clicked")}>Onclick</button>
        )
    }
}