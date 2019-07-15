import React from 'react';
import { Link } from 'react-router-dom';

export const Todo = ({ todo }) => (
  <tr>
    <td>{todo.description}</td>
    <td>{todo.responsible}</td>
    <td>{todo.priority}</td>
    <td>
      <Link to={`/edit/${todo._id}`}>Edit</Link>
    </td>
  </tr>
);
