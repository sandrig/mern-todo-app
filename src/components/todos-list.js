import React, { Component } from 'react';
import { Todo } from './todo';
import axios from 'axios';

export class TodosList extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:4000/todos/')
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  todoList = () => {
    return this.state.todos.map((currentTodo, i) => {
      return <Todo todo={currentTodo} key={i} />;
    });
  };

  render() {
    return (
      <>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </>
    );
  }
}
