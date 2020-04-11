
export const initialState = [
    {
        task: 'Learn about reducers',
        completed: false,
        id: 3892987589,
    },
];

const AddTodo = todo => {
    return {
      task: todo,
      completed: false,
      id: Date.now(),
    };
  };

export const todoReducer = (state, action) => {

    switch(action.type) {
        case 'ADD_TODO':
            return [...state, AddTodo(action.payload)]
             // add todo end bracket
        
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: true,
                    }
                }
                return todo;
            })

        case 'CLEAR_TODOS':
            const unfin = state.filter(todo => !todo.completed)
            return unfin

        default:
            return state;

    }; // switch end bracket
}; // function end bracket