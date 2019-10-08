import React, { FunctionComponent, useEffect, useState } from 'react';

type InputPropsType = {
  handleChange: () => void;
  label?: string;
  name?: string;
};

const Input: FunctionComponent<InputPropsType> = ({ handleChange }) => {
  const [count, setCount] = useState(0);

  const defaultHandler = () => {
    setCount(count + 1);
    console.log('default');
  };

  useEffect(() => {
    handleChange();
  }, [count]);

  return (
    <input
      data-testid="input"
      type="text"
      name="input"
      onChange={defaultHandler}
    />
  );
};

export default Input;
