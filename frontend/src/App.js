import React, { useState, useEffect} from 'react';
import TodoView from './Todo';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('') 
  const [desc, setDesc] = useState('')
  
    

  useEffect(() => {
    axios.get('api/todo')
      .then(res => {
        setTodoList(res.data)
      })
  });

  const addTodoHandler = () => {
    axios.post('api/todo/', { 'title': title, 'description': desc })
      .then(res => console.log(res))
};

  return (
    <div>
      <div className="h-50 text-center" style={{backgroundColor: '#E8E8E8'}}>
      <h1 className="ml-10">Task Application</h1>
      </div>
      <div class="container mt-2">
     <div className="card-body">
      <h2 className="">Add Tasks</h2>
      <span className="card-text"> 
        <input className="mb-2 form-control titleIn" onChange={event => setTitle(event.target.value)} placeholder='Name'/>
        <input className="mb-2 form-control desIn" onChange={event => setDesc(event.target.value)}   placeholder='Description'/>
      <button className="btn btn-primary mx-2 mb-3" style={{'borderRadius':'50px',"font-weight":"bold"}}  onClick={addTodoHandler}>Add Task</button>
      </span>
      <h3>Your Tasks</h3>
      <TodoView todoList={todoList} />
      </div>
    </div>
    </div>
  );
}

export default App;
