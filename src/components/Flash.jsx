import React from "react";
import { CgClose } from "react-icons/cg";

class Flash extends React.Component {
  render() {
    return (
      <div className="flash-card">
        <div className="title-flash-card">{this.props.title}</div>
        <div className="close-flash-card">
          <CgClose />
        </div>
        <div className="body-flash-card">{this.props.message}</div>
        <div className="footer-flash-card">
          <button className="button-yes-flash-card">Sim</button>
          <button className="button-no-flash-card">Não</button>
        </div>
      </div>
    );
  }
}

export default Flash
