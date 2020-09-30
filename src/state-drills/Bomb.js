import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  handleClick = (word) => {
    this.setState({ who: word })
  }
  componentDidMount(){
    this.boomInterval=setInterval(() => {
      this.setState({count:this.state.count+1})
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.boomInterval)
  }
  render() {
    return (
      <div>
        <p>Hello {this.state.who}</p>
      </div>
    )
  }
}