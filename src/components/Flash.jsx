import React from "react";
import { CgClose } from "react-icons/cg";

import Button from "./Button";

import "./Flash.css";

class Flash extends React.Component {
  constructor(props) {
    super(props);
    this.state = { close: false}
    
  }



  render() {

    const {title, onClick, message, toggleModal } = this.props;
    return (
      <div className="flash-card-content">
        <div className="flash-card">
          <div className="flash-card-header">
            <div className="flash-title-card">
              <h2>{title}</h2>
            </div>
            <div className="flash-card-close-button">
              <CgClose onClick={onClick } />
            </div>
          </div>
          <div className="flash-card-body">{message}</div>
          <div className="flash-card-footer">
            <Button onClick={() => toggleModal(true)}>Sim</Button>
            <Button onClick={()=> toggleModal(false)}>Não</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Flash;
