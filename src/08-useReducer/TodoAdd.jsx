// import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  //   const [inputValue, setInputValue] = useState("");

  //   const handleChange = ({ target }) => {
  //     setInputValue(target.value);
  //   };

  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const handleSubmit = () => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      description: description,
      id: new Date().getTime(),
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      // {onNewTodo(inputValue)}
    >
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
