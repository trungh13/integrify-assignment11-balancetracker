import React, { Component } from "react";
import styles from "./App.css";

import ComponentFormModal from "./ComponentFormModal";
import ComponentMain from "./ComponentMain";
import ComponentInformation from "./ComponentInfomation";

class App extends Component {
  state = {
    transaction: [
      {
        inputTitle: "Salary",
        inputDescription: "from 15/5-1/6",
        inputDate: "25/06/2018 20:44:25",
        inputAmount: 1000
      },
      {
        inputTitle: "Grocery ",
        inputDescription: "Food for whole week",
        inputDate: "16/06/2018 20:44:57",
        inputAmount: -120
      },
      {
        inputTitle: "Eurojackpot won",
        inputDescription: "2+1 Price",
        inputDate: "13/06/2018 20:39:15",
        inputAmount: 15
      },
      {
        inputTitle: "Rental fee",
        inputDescription: "For June",
        inputDate: "05/06/2018 20:42:51",
        inputAmount: -500
      },
      {
        inputTitle: "Gas refuel ",
        inputDescription: "",
        inputDate: "16/06/2018 20:44:57",
        inputAmount: -100
      },
      {
        inputTitle: "Salary",
        inputDescription: "from 01/5-15/5",
        inputDate: "15/05/2018 20:44:25",
        inputAmount: 1000
      },
      {
        inputTitle: "Rental fee",
        inputDescription: "For May",
        inputDate: "05/05/2018 20:42:51",
        inputAmount: -500
      },
      {
        inputTitle: "Parking ticket",
        inputDescription: "Come on, 5 minutes only",
        inputDate: "10/04/2018 20:44:25",
        inputAmount: -80
      },
      {
        inputTitle: "Rental fee",
        inputDescription: "For April",
        inputDate: "05/04/2018 20:42:51",
        inputAmount: -500
      },
      {
        inputTitle: "Wrong transfer from random dude",
        inputDescription: "Happy April Fool :)) ",
        inputDate: "01/04/2018 00:01:51",
        inputAmount: 1000
      }
    ],
    balance: 0
  };

  handleSubmit = inputForm => {
    this.setState({
      transaction: [inputForm, ...this.state.transaction]
    });
  };
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.App}>
          <ComponentFormModal
            transaction={this.state.transaction}
            handleSubmit={this.handleSubmit}
          />
          <ComponentInformation transaction={this.state.transaction} />
          <ComponentMain transaction={this.state.transaction} />
        </div>
      </div>
    );
  }
}

export default App;
