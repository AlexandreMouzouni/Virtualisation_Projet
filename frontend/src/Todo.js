import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function TodoItem(props) {
  const deleteTodoHandler = (title) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      axios.delete(`api/todo/${title}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="me-5">
          <span className="fs-10">{props.todo.title}</span>
          <br />
          <span className="fs-20">{props.todo.description}</span>
        </div>
        <button type="button" className="btn btn-danger ms-2"
          onClick={() => deleteTodoHandler(props.todo.title)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <div className="border-bottom mb-2"></div>
    </div>
  )
}

export default function TodoView(props) {
  return (
    <div>
      <ul>
        {props.todoList.map(todo => <TodoItem key={todo._id} todo={todo} />)}
      </ul>
    </div>
  )
}
