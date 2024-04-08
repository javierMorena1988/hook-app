import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas en el todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo TODO",
      done: false,
    },
  ];

  test("Debe de regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {}); //Al mandar un objeto vacio, no pasa por ninguna accion y devuelve el estado inicial
    expect(newState).toBe(initialState); //aunque es un obejto, lo compara con tobe para que sea extrictamente igual
  });

  test("Debe de agregar un todo", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        description: "Nuevo todo #2",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("debe de eliminar un todo", () => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });

  test("debe de realizar el toggle del todo", () => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);

    console.log(newState);

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false);
  });
});
