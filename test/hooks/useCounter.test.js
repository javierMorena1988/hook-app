import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Pruebas en el use counter", () => {
  test("debe retornar dos valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("debe de generar el counter con el valor de 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("debe de incrementar el counter", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, increment } = result.current;

    act(() => {
      increment();
      increment(2);
    });
    // expect(counter).toBe(101); Con este valor no lo va a actualizar
    expect(result.current.counter).toBe(103);
  });

  test("debe de decrementar el counter", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement } = result.current;

    act(() => {
      decrement();
      decrement(2);
    });
    expect(result.current.counter).toBe(97);
  });

  test("debe de resetear el counter", () => {
    const { result } = renderHook(() => useCounter(0));
    const { reset } = result.current;

    act(() => {
      reset();
    });
    expect(result.current.counter).toBe(0);
  });
});
