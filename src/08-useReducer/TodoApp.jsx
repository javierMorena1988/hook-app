import { TodoList, TodoAdd } from "./";
import { useTodos } from "../hooks";

export const TodoApp = () => {
  // useTodo
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp: {todosCount}
        <small>
          Pendientes:
          {pendingTodosCount}
        </small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={(id) => handleDeleteTodo(id)}
            onToggleTodo={(id) => handleToggleTodo(id)}
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={(todo) => handleNewTodo(todo)} />
        </div>
      </div>
    </>
  );
};
