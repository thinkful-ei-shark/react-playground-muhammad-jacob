import React from 'react';

export default class RouletteGun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false
    }
  }
  handleClick = () => {
    this.setState({ spinningTheChamber: true })
    this.timeout = setTimeout(() => {
      let random = Math.ceil(Math.random() * 8);
      this.setState({ spinningTheChamber: false, chamber: random })
    }, 2000)
  }

  componentWillUnmount(){
    clearTimeout(this.timeout)
  }

  decide = () =>{
    if(this.state.spinningTheChamber){
      return 'spinning the chamber and pulling the trigger! ...'
    }
    else if(this.state.chamber===this.props.bulletInChamber){
      return 'BANG!!!!'
    }
    else{
      return "you're safe!"
    }
  }

  render() {
    return (
      <div>
        <p>{this.decide()}</p>
        <button onClick={() => this.handleClick('World')}>Pull the Trigger</button>
      </div>
    )
  }
}