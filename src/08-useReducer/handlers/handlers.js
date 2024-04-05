export const handleNewTodo = (dispatch, todo) => {
  const action = {
    type: "[TODO] Add Todo",
    payload: todo,
  };
  dispatch(action);
};

export const handleDeleteTodo = (dispatch, id) => {
  dispatch({
    type: "[TODO] Remove Todo",
    payload: id,
  });
};

export const handleToggleTodo = (dispatch, id) => {
  dispatch({
    type: "[TODO] Toggle Todo",
    payload: id,
  });
};
