// export const IntroReducer = () => {
//     return ()

// }

const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del alma",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    // state.push(action.payload)  es mala practica porque muta el estado
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

// Esto es una mala practica
// todos.push({
//     id: 2,
//     todo: 'Recolectar la piedra del poder',
//     done: false
// })

// se modifica mediante acciones

const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del poder",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos }); // De momento solo se ve el initialState porque no hemos modificado el state
