import React, { Component } from 'react';

export class CreateTodo extends Component {
  state = {
    description: '',
    responsible: '',
    priority: '',
    completed: false,
  };

  onChangeTodoDescription = e => {
    this.setState({
      description: e.target.value,
    });
  };

  onChangeTodoResponsible = e => {
    this.setState({
      responsible: e.target.value,
    });
  };

  onChangeTodoPriority = e => {
    this.setState({
      priority: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.description}`);
    console.log(`Todo Responsible: ${this.state.responsible}`);
    console.log(`Todo Priority: ${this.state.priority}`);

    this.setState({
      description: '',
      responsible: '',
      priority: '',
      completed: false,
    });
  };

  render() {
    const { description, responsible, priority } = this.state;
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Todo</h3>
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

          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
