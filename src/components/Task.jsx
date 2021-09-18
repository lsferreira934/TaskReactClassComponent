import React from "react";
import "./Task.css";
import { CgClose, CgInfo } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Flash from "./Flash";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, task: '' };
    
    this.handleTaskDetailsClick = this.handleTaskDetailsClick.bind(this);
    this.handleShowModalClick = this.handleShowModalClick.bind(this);
    this.handleYesOrNo = this.handleYesOrNo.bind(this);
  }

  handleShowModalClick(task) {
    this.setState({ showModal: true, task: task.id });
  }

  handleTaskDetailsClick(task) {
    this.props.history.push(`${task.title}`);
  }

  handleYesOrNo(check) {
    if (check) {
      this.props.handleTaskDeletede(this.state.task);
    }
    this.setState({ showModal: false });
  }

  render() {
    const { task, handleTaskClick, handleTaskDeletede } = this.props;
    return (
      <div
        className="task-container"
        style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
      >
        <div className="task-title" onClick={() => handleTaskClick(task.id)}>
          {task.title}
        </div>
        <div className="button-container">
          <button
            onClick={() => this.handleTaskDetailsClick(task)}
            className="see-task-details-button"
          >
            <CgInfo />
          </button>
          <button
            onClick={() => this.handleShowModalClick(task)}
            className="remove-task-button"
          >
            <CgClose />
          </button>
        </div>
        {this.state.showModal ? (
          <Flash
            title=""
            message="Deseja mesmo apagar?"
            toggleModal={this.handleYesOrNo}
            onClick={() => this.setState({ showModal: false })}
          />
        ) : null}
      </div>
    );
  }
}

export default withRouter(Task);
