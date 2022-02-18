import { useState } from 'react';

const useToggle = (
  initialValue: boolean
): [boolean, () => void, () => void] => {
  const [toggle, setToggle] = useState(initialValue);
  const toggleTrue = () => setToggle(true);
  const toggleFalse = () => setToggle(false);
  return [toggle, toggleTrue, toggleFalse];
};

export default useToggle;
