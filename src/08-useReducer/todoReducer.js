export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload];

    // No hay que mutar los arreglos ni usar push

    case "[TODO] Remove Todo":
      return initialState.filter((todo) => todo.id !== action.payload);
    /*todo.id* es lo que le vamos a enviar en lugar de todo el todo*/

    case "[TODO] Toggle Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });

    default:
      return initialState;
  }
};
