import React from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Flash from "./components/Flash";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.handleTaskAddition = this.handleTaskAddition.bind(this);
    this.handleTaskClick = this.handleTaskClick.bind(this);
    this.handleTaskDeletede = this.handleTaskDeletede.bind(this);
  }

  componentDidMount() {
    const fetchTask = async () => {
      const res = await fetch(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );
      const data = await res.json();
      this.setState({ tasks: data });
    };
    fetchTask();
  }

  handleTaskDeletede(taskid) {
    const newTask = this.state.tasks.filter((task) => task.id !== taskid);
    this.setState({ tasks: newTask });
  }

  handleTaskClick(taskid) {
    const newTask = this.state.tasks.map((task) => {
      if (task.id === taskid) return { ...task, completed: !task.completed };
      return task;
    });

    this.setState({ tasks: newTask });
  }

  handleTaskAddition(taskTittle) {
    const newTask = [
      ...this.state.tasks,
      { id: uuidv4(), title: taskTittle, completed: false },
    ];

    this.setState({ tasks: newTask });
    console.log(this.state.tasks);
  }

  render() {
    const { tasks } = this.state;
    return (
      <Router>
        <div className="container">
          <Header title="Minhas Tarefas" />
          <Route
            path="/"
            exact
            render={() => {
              return (
                <React.Fragment>
                  <AddTask handleTaskAddition={this.handleTaskAddition} />
                  <Tasks
                    tasks={tasks}
                    handleTaskClick={this.handleTaskClick}
                    handleTaskDeletede={this.handleTaskDeletede}
                  />
                </React.Fragment>
              );
            }}
          />
          <Route path="/:taskTitle" exact component={TaskDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
