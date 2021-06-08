import React, { Component } from "react";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        console.log("Нажали ESC");
        this.props.onClose();
      }
    });
  }
  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
