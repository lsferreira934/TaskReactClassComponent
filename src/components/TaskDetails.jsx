import React from "react";
import { CgLaptop } from "react-icons/cg";
import { withRouter } from "react-router";

import Button from "./Button";

import './TaskDetails.css'

class TaskDetails extends React.Component {
  constructor(props){
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
  }

handleBackButtonClick() {
  this.props.history.goBack();
}

  render() {
    return (
      <React.Fragment>
        <div className="back-button-container">
          <Button onClick={this.handleBackButtonClick}>Voltar</Button>
        </div>
        <div className="task-details-container">
          <h2>{this.props.match.params.taskTitle}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit
            quidem alias velit rem laboriosam magnam quis aliquid necessitatibus
            repellendus, odit ipsam, animi sequi facilis! Quibusdam ea optio
            reprehenderit nemo?
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(TaskDetails);
