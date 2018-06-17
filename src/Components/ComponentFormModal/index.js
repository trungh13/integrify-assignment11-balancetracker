import React, { Component } from "react";
import ReactModal from "react-modal";
import ComponentForm from "./ComponentForm";
export default class ComponentFormModal extends Component {
  state = {
    showModal: false
  };
  handleCloseModal=()=> this.setState({ showModal: false })
  handleOpenModal=()=> this.setState({ showModal: true })
  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal}>
          +
        </button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Create form"
          ariaHideApp={false}
        >
          <ComponentForm transaction={this.props.transaction} handleSubmit={this.props.handleSubmit} closeModal={this.handleCloseModal}/>
          <button onClick={this.handleCloseModal}>
            Close
          </button>
        </ReactModal>
      </div>
    );
  }
}
