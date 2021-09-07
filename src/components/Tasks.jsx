import React from "react";
import Task from "./Task";


class Tasks extends React.Component {
  render() {
    const { tasks, handleTaskClick, handleTaskDeletede } = this.props;

    return (
      <React.Fragment>
        {tasks.map((task) => (
          <Task
            task={task}
            handleTaskClick={handleTaskClick}
            handleTaskDeletede={handleTaskDeletede}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Tasks;
