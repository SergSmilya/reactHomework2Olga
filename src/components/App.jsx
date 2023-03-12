import Feedback from './Feedback/Feedback';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = e => {
    const key = [e.target.outerText];
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Feedback state={this.state} onButtonClick={this.onButtonClick} />
      </div>
    );
  }
}
