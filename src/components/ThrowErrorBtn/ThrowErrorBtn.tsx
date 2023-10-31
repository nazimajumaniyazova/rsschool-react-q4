import './ThrowErrorBtn.scss';
import { useState, type FC, useEffect } from 'react';

const ThrowErrorBtn: FC = () => {
  const [hasError, setHasError] = useState<boolean>(false);

  const onClick = () => {
    setHasError(true);
  };

  useEffect(() => {
    if (hasError) {
      throw new Error('You caused the Error');
    }
  }, [hasError]);

  return (
    <button className="error-btn" onClick={onClick}>
      Click to error
    </button>
  );
};

export default ThrowErrorBtn;
