import React from 'react';

export default function ToDo( { dispatch, task, id }) {


    return (
        <form>
            <input 
                type="checkbox" 
                id="task" 
                name="task" 
                onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: id })} 
            />
            <label>{task}</label>
        </form>
    );
}