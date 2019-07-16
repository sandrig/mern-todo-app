import React from 'react';
import { Link } from 'react-router-dom';

export const Todo = ({ todo }) => (
  <tr>
    <td className={todo.completed ? 'completed' : ''}>{todo.description}</td>
    <td className={todo.completed ? 'completed' : ''}>{todo.responsible}</td>
    <td className={todo.completed ? 'completed' : ''}>{todo.priority}</td>
    <td>
      <Link to={`/edit/${todo._id}`}>Edit</Link>
    </td>
  </tr>
);
