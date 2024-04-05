import React, { memo } from "react";
export const ShowIncrement = memo(({ increment }) => {
  console.log("Me volvi a generar"); // con memo, se vuelve a generar al ser una funcion

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});
