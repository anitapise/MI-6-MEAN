import React, { Component } from "react";
export default class Activity5 extends Component{
    constructor(){
        super();
        this.state={
            msg:"welcome afp learning",
        }
    }
     render() {
    return (
      <div>
        <h2>activity5</h2>
        <h3>{this.state.msg}.</h3>
      </div>
    );
  }
}