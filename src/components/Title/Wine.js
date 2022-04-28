import React, { Component } from "react"
import "./Title.css"
class Wine extends Component{
    render(){
        return(
           <div className="main">
           <h1 className="titleClass">{this.props.title}</h1>
           <p>{this.props.description}</p>
           <p>{this.props.rating}</p>
           <p>{this.props.like ?<p>&#128147;</p>:null}</p>
           </div>
        )
    }
}
export default Wine