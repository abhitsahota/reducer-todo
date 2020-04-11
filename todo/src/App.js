import React, { useReducer } from 'react';
import { initialState, todoReducer } from './reducers/todoreducer'

import './App.css';
import ToDoForm from './components/ToDoForm'
import ToDo from './components/ToDo'

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <div className="App">
      <h2>Welcome to your todo app!</h2>

      <ToDoForm dispatch={dispatch} />

      {state.map(todo => {
        return <ToDo 
          dispatch={dispatch} 
          task={todo.task} 
          key={todo.id}
          id={todo.id}
        />
      })}

    </div>
  );
}

export default App;
