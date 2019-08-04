import React, { FunctionComponent } from 'react';

type InputPropsType = {
  handleChange?: (event: React.ChangeEvent) => void;
  label?: string;
  name?: string;
};

const Input: FunctionComponent<InputPropsType> = ({ handleChange }) => {
  return <input type="text" name="input" onChange={handleChange} />;
};

export default Input;
