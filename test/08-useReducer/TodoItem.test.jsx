import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("Pruebas en el componente  <TodoItem/>", () => {
  const todo = {
    id: 1,
    desciption: "Piedra del Alma",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks(); // limpia en cada test las funciones mockeadas
  });

  test("Debe mostrar el TODO pendiente de completar", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    console.log(liElement.innerHTML);
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByLabelText("span");
    console.log(spanElement.className);
    expect(spanElement.className).toContain("align-self-center"); // o con el toBe con el espacio al final
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });

  test("Debe mostrar el TODO completado", () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("span debe de llamar el ToggleTodo cuando se hace click", () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("button debe de llamar el deleteTodo", () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
