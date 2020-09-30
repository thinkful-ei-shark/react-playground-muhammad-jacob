import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      words: ['tick', 'tock', 'BOOM!!!!']
    }
  }
  callback(){
    if (this.state.count / 2 === 0) {
      this.word = this.state.words[0]
    }
    if (this.state.count / 2 !== 0) {
      this.word = this.state.words[1]
    }
    if (this.state.count >= 8) {
      this.word = this.state.words[2]
    }
  }
  componentDidMount(){
    this.interval = setInterval(() => {this.callback, 1000})
  }

  render() {
    return (
      <div>
        <p>Oh No!</p>
        <p>`{this.word}`</p>
      </div>
    )
  }
}