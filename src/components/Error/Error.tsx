import './Error.scss';

import { Component } from 'react';

export default class Error extends Component {
  render() {
    return (
      <div className="error">
        <h1>Oops!</h1>
        <p>Sorry, an expected error has occurred.</p>
        <p>Reload the page to get rid of this</p>
      </div>
    );
  }
}
