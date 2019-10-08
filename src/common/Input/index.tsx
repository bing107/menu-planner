import React, { FunctionComponent, useEffect, useState } from 'react';

type InputPropsType = {
  handleChange: () => void;
  label?: string;
  name?: string;
};

const Input: FunctionComponent<InputPropsType> = ({ handleChange }) => {
  useEffect(() => {
    handleChange();
  }, [handleChange]);

  return (
    <input
      data-testid="input"
      type="text"
      name="input"
      onChange={handleChange}
    />
  );
};

export default Input;
