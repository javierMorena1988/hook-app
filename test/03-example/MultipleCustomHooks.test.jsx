import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch"; // para no hacer un mock del counter
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch"); // asi daria fallo todos los test. Cuando se manda llamar useFetch aqui es undefined,
// por lo que no se puede desestructurar de un undefined... hay que mockearlo en cada test

jest.mock("../../src/hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks/>", () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText("BreakingBad Quotes"));

    const nextButton = screen.getByRole("button", { name: "Next quote" });

    // console.log(nextButton.disabled);
    expect(nextButton.disabled).toBeTruthy();
  });

  test("debe de mostrar un Quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Hola Mundo")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Next quote" });
    // hemos cogido "name" porque salia del console log al poner mal una propiedad. Revisar

    // console.log(nextButton.disabled);
    expect(nextButton.disabled).toBeFalsy();
  });

  test("Debe de llamar a la funcion de incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button", { name: "Next quote" });

    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
