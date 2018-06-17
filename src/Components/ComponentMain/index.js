import React, { Component } from "react";
import styles from "./index.css";

import TransactionLog from "./TransactionLog";

export class ComponentMain extends Component {
  render() {
    const renderTransaction = this.props.transaction.map((element, index) => {
      return (
        <TransactionLog
          log={element}
          key={`${element.inputDescription}${index}`}
        />
      );
    });
    return (
      <div className={styles.ComponentMain}>
        {renderTransaction}
      </div>
    );
  }
}

export default ComponentMain;
