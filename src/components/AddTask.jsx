import React from "react";
import "./AddTask.css";
import Button from "./Button";

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputData: "" };
    this.handleAddTaskClick = this.handleAddTaskClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({ inputData: e.target.value });
  }

  handleAddTaskClick() {
    this.props.handleTaskAddition(this.state.inputData);
    this.setState({ inputData: ''})
  }

  render() {
    return (
      <div className="add-task-container">
        <input
          onChange={(e) => this.handleInputChange(e)}
          className="add-task-input"
          type="text"
          value={this.state.inputData}
        />
        <div className="add-task-button-container">
          <Button onClick={this.handleAddTaskClick}>Adicionar</Button>
        </div>
      </div>
    );
  }
}

export default AddTask;
