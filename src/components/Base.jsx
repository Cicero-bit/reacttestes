import React, { Component } from "react";

import Form from "./Form";
import Task from "./tasks"

import "./Base.css";


export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  };

  componentDidMount(){
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if(!tasks) return;
    this.setState({
      tasks,
    })
  }


  componentDidUpdate(prevProps, prevState){
    const { tasks } = this.state;
    if (tasks === prevState.tasks) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleChange = (e) => {
      this.setState({
        newTask: e.target.value,
      })
    };

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const arrTasks = [...tasks];
    arrTasks.splice(index, 1);

    this.setState({
      tasks: [...arrTasks],
    })
  };

  handleEdit = (e, index) => {
    this.setState({
      index: index,
      newTask: this.state.tasks[index],
    })
  };

  handleSubmit= (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    let { newTask } = this.state;

    if(tasks.indexOf(newTask.trim()) !== -1) return;

    const newTasks = [...tasks];

    if (this.state.index === -1) {
      this.setState({
        tasks: [...newTasks, newTask.trim()],
        newTask: '',
      });
    } else {
      newTasks[this.state.index] = newTask;
      this.setState({
        tasks: newTasks,
        index: -1,
        newTask: '',
      })
    }


  }

  render() {
    const {newTask, tasks} = this.state;
    return(
      <div className="main">
        <h1>Todo List</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
        />
        <Task
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          tasks={tasks}
        />
      </div>
      );
  }
};
