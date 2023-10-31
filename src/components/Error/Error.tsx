import './Error.scss';

import { type FC } from 'react';

const Error: FC = () => {
  return (
    <div className="error">
      <h1>Oops!</h1>
      <p>Sorry, an expected error has occurred.</p>
      <p>Reload the page to get rid of this</p>
    </div>
  );
};
export default Error;
