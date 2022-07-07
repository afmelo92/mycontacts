import { useState } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  function clearErrors() {
    return setErrors([]);
  }

  function setError({ field, message }) {
    const errorAlreadyExists = errors.find((error) => error.field === 'email');

    if (errorAlreadyExists) {
      return;
    }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }

  function removeError(fieldname) {
    setErrors((prevState) => prevState.filter((error) => error.field !== fieldname));
  }

  function getErrorMessageByFieldName(fieldname) {
    return errors.find((error) => error.field === fieldname)?.message;
  }

  return {
    errors,
    clearErrors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
}
