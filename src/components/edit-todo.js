import React, { Component } from 'react';
import axios from 'axios';

export class EditTodo extends Component {
  state = {
    description: '',
    responsible: '',
    priority: '',
    completed: false,
  };

  componentDidMount() {
    axios
      .get(`http://localhost:4000/todos/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          description: response.data.description,
          responsible: response.data.responsible,
          priority: response.data.priority,
          completed: response.data.completed,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeTodoDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeTodoResponsible(e) {
    this.setState({
      responsible: e.target.value,
    });
  }

  onChangeTodoPriority(e) {
    this.setState({
      priority: e.target.value,
    });
  }

  onChangeTodoCompleted(e) {
    this.setState({
      completed: !this.state.completed,
    });
  }

  onSubmit(e) {
    const { description, responsible, priority, completed } = this.state;
    e.preventDefault();
    const obj = {
      description,
      responsible,
      priority,
      completed,
    };
    console.log(obj);
    axios
      .post(
        `http://localhost:4000/todos/update/${this.props.match.params.id}`,
        obj,
      )
      .then(res => console.log(res.data));

    this.props.history.push('/');
  }

  render() {
    const { description, responsible, priority, completed } = this.state;
    return (
      <>
        <h3 align="center">Update Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={this.onChangeTodoDescription}
            />
          </div>
          <div className="form-group">
            <label>Responsible: </label>
            <input
              type="text"
              className="form-control"
              value={responsible}
              onChange={this.onChangeTodoResponsible}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={priority === 'Low'}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={priority === 'Medium'}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={priority === 'High'}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              id="completedCheckbox"
              type="checkbox"
              name="completedCheckbox"
              onChange={this.onChangeTodoCompleted}
              checked={completed}
              value={completed}
            />
            <label className="form-check-label" htmlFor="completedCheckbox">
              Completed
            </label>
          </div>

          <br />

          <div className="form-group">
            <input
              type="submit"
              value="Update Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </>
    );
  }
}
