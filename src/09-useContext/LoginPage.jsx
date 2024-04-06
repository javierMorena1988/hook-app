import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext); // para que sepa que es este contexto y no otro posible
  console.log(user); // user viene del value que hemos puesto al provider

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 123, name: "Juan", email: "juan@google.com" })
        }
      >
        Establecer Usuario
      </button>
    </>
  );
};

export default LoginPage;
