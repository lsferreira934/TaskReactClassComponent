import React from "react";
import Task from "./Task";

class Tasks extends React.Component {
  render() {
    const {
      tasks,
      handleTaskClick,
      handleTaskDeletede,
      showModal,
    } = this.props;

    return (
      <React.Fragment>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleTaskClick={handleTaskClick}
            handleTaskDeletede={handleTaskDeletede}
            showModal={showModal}
            
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Tasks;
