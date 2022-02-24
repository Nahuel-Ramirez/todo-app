import { useState } from "react";

export const useFormulario = (initialState = {}) => {
  const [inputs, setInputs] = useState(initialState);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    setInputs((old) => ({
      ...old,

      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const reset = () => {
    setInputs(initialState);
  };

  return [inputs, handleChange, reset];
};
