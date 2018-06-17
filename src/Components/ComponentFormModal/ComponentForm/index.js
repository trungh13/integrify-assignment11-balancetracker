import React, { Component } from "react";
import styles from "./index.css";

export class ComponentForm extends Component {
  state = {
    inputTitle: "",
    inputDescription: "",
    inputAmount: 0,
    inputDate: "",
    inputType:"Income",
    balance:  this.props.transaction.reduce((total,cur)=>total+cur.inputAmount,0)
  };
  titleRef = React.createRef();
  amountRef = React.createRef();


  handleSubmit = event => {
    event.preventDefault();
    let isRightInput = true;
    const numRegex = /^[+]?([0-9][.]|[.]?[1-9])+[0-9]{0,}[.]?\d{0,}$/;
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
    if(this.state.balance>(-this.state.inputAmount)){
      isRightInput=false;
      this.props.closeModal();
      alert("You can't spend more than your income!")
    }
    if (isRightInput) {
      this.props.handleSubmit({
        inputTitle: this.state.inputTitle,
        inputDescription: this.state.inputDescription,
        inputDate: this.state.inputDate,
        inputAmount:
          this.state.inputType === "Income"
            ? this.state.inputAmount
            : -this.state.inputAmount
      });
      this.setState({
        inputDescription: "",
        inputAmount: "",
        inputTitle: ""
      });
      this.props.closeModal();
    }
  };
  render() {
    return (
      <form className={styles.ComponentForm} onSubmit={this.handleSubmit}>
        <input
          type="text"
          className={styles.inputTitle}
          name="inputTitle"
          placeholder="Title *"
          value={this.state.inputTitle}
          onChange={e => this.setState({ inputTitle: e.target.value })}
          ref={this.titleRef}
        />
        <input
          type="text"
          className={styles.InputDescription}
          name="InputDescription"
          placeholder="Description"
          value={this.state.inputDescription}
          onChange={e => this.setState({ inputDescription: e.target.value })}
        />
        <input
          type="number"
          className={styles.InputAmount}
          name="InputAmount"
          placeholder="Amount *"
          value={this.state.inputAmount}
          onChange={e => this.setState({ inputAmount: Number(e.target.value) })}
          ref={this.amountRef}
        />
        <select
          className={styles.InputType}
          onChange={e => this.setState({ inputType: e.target.value })}
        >
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <input
          className={styles.SubmitForm}
          type="submit"
          value="Add"
          formNoValidate
          onClick={() =>
            this.setState({
              inputDate: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
            })
          }
        />
      </form>
    );
  }
}

export default ComponentForm;
