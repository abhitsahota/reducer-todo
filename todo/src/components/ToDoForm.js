import React, { useState } from 'react';

export default function ToDoForm({ dispatch }) {

    const [todo, setTodo] = useState('');

    const handleChange = e => {
        setTodo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: todo })
        setTodo('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='task-input'
                    value={todo}
                    onChange={handleChange}
                />
                <button>Add Task</button>
            </form>
            <button 
                onClick={() => {
                    console.log('button works')
                    dispatch({ type: 'CLEAR_TODOS' })
            }}>
                Clear Completed Tasks
            </button>
        </div>


    )
};