import React, { Component } from "react";
import styles from "./index.css";
export class ComponentInformation extends Component {
  render() {
    let income = 0;
    let expense = 0;
    const balance = this.props.transaction.reduce((total, cur) => {
      cur.inputAmount >= 0
        ? (income += cur.inputAmount)
        : (expense += cur.inputAmount);
      return total + cur.inputAmount;
    }, 0);
    const BalanceBarStyles = {
      gridTemplateColumns: `${-expense}fr ${balance}fr`
    };

    return (
      <div className={styles.ComponentInformation}>
        <h1 className={styles.AppHeader}>Balance Tracker Application</h1>
        <div className={styles.BalanceBar} style={BalanceBarStyles}>
          <p className={styles.ExpenseP}> Expense : {-expense} €</p>
          <p className={styles.BalanceP}> Balance : {balance} €</p>
          <div className={styles.Expense} />
          <div className={styles.Balance} />
          <p className={styles.incomeDescription}> Income : {income}</p>
        </div>
      </div>
    );
  }
}

export default ComponentInformation;
