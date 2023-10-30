import './ThrowErrorBtn.scss';
import { Component } from 'react';

interface IProps {
  smth?: string;
}

interface IState {
  hasError: boolean;
}

class ThrowErrorBtn extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  onClick = () => {
    this.setState({ hasError: true });
  };
  componentDidUpdate(): void {
    if (this.state.hasError) throw new Error('You caused the Error');
  }
  render() {
    return (
      <button className="error-btn" onClick={this.onClick}>
        Click to error
      </button>
    );
  }
}

export default ThrowErrorBtn;
