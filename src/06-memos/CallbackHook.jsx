import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback(
    // () => setCounter(counter + 1),
    (value /*aqui se definen todos los argumentos*/) => {
      setCounter((c) => c + value);
    }, // value es el que va a ir al hijo
    // tenemos que usar el arguymento del callback ya que counter tamien es un valor memoizado
    // no se vuelve a lanzar porque ocupa el mismo espacio en memoria la funcion

    []
  );
  // Si no ponemos dependencias, solo sumará la primera vez aunque se vuelve a ejecutar

  //   const incrementFather = () => {
  //     setCounter(counter + 1);
  //   };

  useEffect(() => {}, [incrementFather]);

  return (
    <>
      <h1>useCallback hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
