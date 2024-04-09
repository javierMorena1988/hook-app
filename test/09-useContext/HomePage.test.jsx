import { render, screen } from "@testing-library/react";
import HomePage from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Pruebas en <HomePage/>", () => {
  const user = {
    id: 1,
    name: "Javier",
  };

  test("Debe de mostrar el componente sin el usuario", () => {
    // render(<HomePage />);
    // el userContext si no existe, va a petar. Tenemos que envolver el render
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
      // Ahora, en la consola pone null aunque no lo veamos porque jsx lo quita
    );

    const preTag = screen.getByLabelText("pre");

    console.log(preTag.innerHTML);
    expect(preTag.innerHTML).toBe("null");

    screen.debug();
  });

  test("Debe de mostrar el componente CON el usuario", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");

    console.log(preTag.innerHTML);
    // expect(preTag.innerHTML).toBe(JSON.stringify(user)); este no funciona
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(`${user.id}`); // con Template string o haciendo toString

    screen.debug();
  });
});
