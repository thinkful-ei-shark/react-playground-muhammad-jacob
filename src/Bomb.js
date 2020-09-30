import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      word: ''
    }
  }
  callback = () => {
    if (this.state.count >= 8) {
      this.setState({ count: this.state.count + 1, word: 'Boom' });
      clearInterval(this.interval);
    }
    else if (this.state.count % 2 === 0) {
      this.setState({ count: this.state.count + 1, word: 'tick' })
    }
    else if (this.state.count % 2 !== 0) {
      this.setState({ count: this.state.count + 1, word: 'tock' })
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => { this.callback() }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>Oh No!</p>
        <p>`{this.state.word}`</p>
      </div>
    )
  }
}