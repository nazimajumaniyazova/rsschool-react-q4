import './ThrowErrorBtn.scss';
import { Component } from 'react';

interface IProps {
  smth?: string;
}

interface IState {
  isError: boolean;
}

class ThrowErrorBtn extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isError: false,
    };
  }
  onClick = () => {
    this.setState({ isError: true });
    throw Error('You caused the Error');
  };

  render() {
    return (
      <button className="error-btn" onClick={this.onClick}>
        Click to error
      </button>
    );
  }
}

export default ThrowErrorBtn;
