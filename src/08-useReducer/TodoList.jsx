import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        //Inicio Componente TODO Item
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={
            onDeleteTodo
          } /*igual a onDeleteTodo={(id) => onDeleteTodo(id)}*/
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};
