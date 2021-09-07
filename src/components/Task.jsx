import React from "react";
import "./Task.css";
import { CgClose, CgInfo } from "react-icons/cg";
import { useNavigate } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

import Flash from './Flash'

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.alertDelete = this.alertDelete.bind(this);
    this.handleTaskDetailsClick = this.handleTaskDetailsClick.bind(this);
  }

  alertDelete(task){
     this.props.handleTaskDeletede(task.id)
  }

  handleTaskDetailsClick(task){
    this.props.history.push(`${task.title}`)
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
            onClick={() => this.alertDelete(task)}
            className="remove-task-button"
          >
            <CgClose />
          </button>
        </div>
      </div>
    );
  }
}

export default  withRouter(Task);
