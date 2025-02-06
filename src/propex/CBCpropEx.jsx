import React, { Component } from 'react'

export default class CBCpropEx extends Component {
  render() {
    console.log(this);
    return (
      <div>CBCpropEx
        <h1>{this.props.username}</h1>
        <h2>{this.props.age}</h2>
        {
            this.props.hobbies.map(hobby=>{
                return <li>{hobby}</li>
            }
            )
        }
        <h1>{this.props.adress.city}</h1>
        <button onClick={this.props.sendFun}>Click</button>

      </div>
    )
  }
}
