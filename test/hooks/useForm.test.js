import { renderHook, act } from "@testing-library/react";
import { useForm } from "./../../src/hooks";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Javier",
    email: "morena@gmail.com",
  };

  test("debe de regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));

    // const {} = result.current ahora otra tecnica
    expect(result.current).toEqual({
      name: initialForm.name, //'Javier',
      email: initialForm.email, //'morena@gmail.com',
      formState: initialForm, //{ name: 'Javier', email: 'morena@gmail.com' },
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("debe de cambiar el nombre del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));

    // llamamos con el act el oninputchange, el evento

    const newValue = "Javier";

    const { onInputChange } = result.current;

    act(() => {
      onInputChange({
        target: {
          name: "name",
          value: newValue,
        },
      });
    });

    expect(result.current.name).toBe(newValue); // yo usé toEqual (se usa para datos primitivos), el toBe(para objetos, funciones)
    expect(result.current.formState.name).toBe(newValue);
  });

  test("debe de realizar el reset del formulario", () => {
    const newValue = "Juan";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({
        target: {
          name: "name",
          value: newValue,
        },
      });
      onResetForm();
    });

    // hacemos el expect
    console.log(result.current);

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
