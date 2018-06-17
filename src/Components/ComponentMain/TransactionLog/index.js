import React from "react";
import styles from "./index.css";

const TransactionLog = props => {
  let logAmountStyle;
  props.log.inputAmount >= 0
    ? (logAmountStyle = styles.Income)
    : (logAmountStyle = styles.Expense);
  return (
    <div className={styles.TransactionLog}>
      <p className={styles.logTitle}>{props.log.inputTitle}</p>
      <p className={`${styles.logAmount} ${logAmountStyle}`}>
        {props.log.inputAmount} €
      </p>
      <p className={styles.logDescription}>{props.log.inputDescription}</p>
      <p className={styles.logDate}>{props.log.inputDate}</p>
    </div>
  );
};

export default TransactionLog;
