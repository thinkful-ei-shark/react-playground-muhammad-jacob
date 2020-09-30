import React from 'react';

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      who: 'World'
    }
  }
  handleClick = (word) => {
    this.setState({ who: word })
  }
  render() {
    return (
      <div>
        <p>Hello {this.state.who}</p>
        <button onClick={() => this.handleClick('World')}>World</button>
        <button onClick={() => this.handleClick('Friend')}>Friend</button>
        <button onClick={() => this.handleClick('React')}>React</button>
      </div>
    )
  }
}