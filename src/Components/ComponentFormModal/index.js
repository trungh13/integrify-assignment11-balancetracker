import React, { Component } from "react";
import styles from "./index.css";

import ReactModal from "react-modal";
import ComponentForm from "./ComponentForm";

import FontAwesome from "react-fontawesome";
export default class ComponentFormModal extends Component {
  state = {
    showModal: false
  };
  handleCloseModal = () => this.setState({ showModal: false });
  handleOpenModal = () => this.setState({ showModal: true });
  render() {
    return (
      <div className={styles.ComponentFormModal}>
        <FontAwesome
          className={styles.addButton}
          onClick={this.handleOpenModal}
          name="plus-circle"
          size="2x"
        />

        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Create form"
          ariaHideApp={false}
        >
          <ComponentForm
            transaction={this.props.transaction}
            handleSubmit={this.props.handleSubmit}
            closeModal={this.handleCloseModal}
          />
        </ReactModal>
      </div>
    );
  }
}
