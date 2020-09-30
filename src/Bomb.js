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
      if (this.state.count / 2 === 0) {
        this.setState({count:this.state.count+1,word:'tick'})
      }
      if (this.state.count / 2 !== 0) {
        this.setState({count:this.state.count+1,word:'tock'})
      }
      if (this.state.count >= 8) {
        this.setState({count:this.state.count+1,word:'Boom'})
      }
    }
    componentDidMount(){
      this.interval = setInterval(() => { this.callback()}, 1000 )
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