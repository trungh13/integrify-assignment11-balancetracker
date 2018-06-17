import React, { Component } from "react";
import "./App.css";

import ComponentFormModal from "./ComponentFormModal";
import ComponentMain from "./ComponentMain"
import styles from './App.css'
class App extends Component {
  state={
    transaction:[
      {inputTitle: "Grocery ", inputDescription: "Food for whole week", inputDate: "16/06/2018 20:44:57", inputAmount: -120},
      {inputTitle: "Salary", inputDescription: "from 15/5-1/6", inputDate: "15/06/2018 20:44:25", inputAmount: 900},      
      {inputTitle: "Eurojackpot won", inputDescription: "2+1 Price", inputDate: "13/06/2018 20:39:15", inputAmount: 15},
      {inputTitle: "Rental fee", inputDescription: "For July", inputDate: "05/06/2018 20:42:51", inputAmount: -500},
    ],
    balance:0
  }

  handleSubmit=(inputForm)=>{
    this.setState({
      transaction:[inputForm,...this.state.transaction]
    })
  }
  render() {
    return (
      <div className={styles.App}>
        <ComponentFormModal transaction={this.state.transaction}handleSubmit={this.handleSubmit}/>
        <ComponentMain transaction={this.state.transaction}/>    
      </div>
    );
  }
}

export default App;
