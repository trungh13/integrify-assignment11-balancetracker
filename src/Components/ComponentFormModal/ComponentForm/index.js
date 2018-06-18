import React, { Component } from "react";
import styles from "./index.css";

export class ComponentForm extends Component {
  state = {
    inputTitle: "",
    inputDescription: "",
    inputAmount: "",
    inputDate: "",
    inputType: "Income",
    balance: this.props.transaction.reduce(
      (total, cur) => total + cur.inputAmount,
      0
    )
  };
  titleRef = React.createRef();
  amountRef = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    let isRightInput = true;
    const numRegex = /^[+]?([0-9][.]|[.]?[1-9])+[0-9]{0,}[.]?\d{0,}$/;
    const typeRegex = /Income|Expense/;
    if (!this.state.inputTitle) {
      isRightInput = false;
      this.titleRef.current.placeholder = "Please enter title!";
      this.titleRef.current.className = styles.warning;
      this.setState({
        inputDescription: ""
      });
    }
    if (!numRegex.test(this.state.inputAmount)) {
      isRightInput = false;
      this.amountRef.current.placeholder = "Re-enter amount!";
      this.amountRef.current.className = styles.warning;
      this.setState({
        inputAmount: ""
      });
    }
    if (
      this.state.inputType === "Expense" &&
      this.state.balance < this.state.inputAmount
    ) {
      isRightInput = false;
      this.props.closeModal();
      alert("You can't spend more than your income!");
    }
    if (!typeRegex.test(this.state.inputType)) {
      isRightInput = false;
      alert("Come on Ben, dont be naughty!!!!");
    }
    if (isRightInput) {
      this.props.handleSubmit({
        inputTitle: this.state.inputTitle,
        inputDescription: this.state.inputDescription,
        inputDate: this.state.inputDate,
        inputAmount:
          this.state.inputType === "Income"
            ? this.state.inputAmount
            : this.state.inputType === "Expense"
              ? -this.state.inputAmount
              : {}
      });
      this.setState({
        inputDescription: "",
        inputAmount: "",
        inputTitle: ""
      });
      this.props.closeModal();
    }
  };
  handleChange = e =>
    this.setState({
      [e.target.name]:
        e.target.type === "number" ? Number(e.target.value) : e.target.value
    });
  render() {
    console.log(this.state.balance);
    return (
      <form className={styles.ComponentForm} onSubmit={this.handleSubmit} id="form">
        <h2>Create new transaction</h2> <br/>
        <div className={styles.FormGrid}>
          <input
            type="text"
            className={styles.inputTitle}
            name="inputTitle"
            placeholder="Title *"
            value={this.state.inputTitle}
            onChange={this.handleChange}
            ref={this.titleRef}
          />
          <input
            type="number"
            className={styles.InputAmount}
            name="inputAmount"
            placeholder="Amount *"
            value={this.state.inputAmount}
            onChange={this.handleChange}
            ref={this.amountRef}
          />
          <select
            className={styles.InputType}
            onChange={this.handleChange}
            name="inputType"
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          <input
            type="text"
            className={styles.InputDescription}
            name="inputDescription"
            placeholder="Description"
            value={this.state.inputDescription}
            onChange={this.handleChange}
          />
          <button
            className={styles.BtnSubmit}
            type="submit"
            value="Add"
            form="form"
            onClick={() =>
              this.setState({
                inputDate: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
              })
            }
          >Add</button>
          <button className={styles.BtnClose}onClick={this.props.closeModal}>Close</button>
        </div>
      </form>
    );
  }
}

export default ComponentForm;
