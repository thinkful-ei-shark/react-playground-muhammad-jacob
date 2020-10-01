import React, { useState } from 'react';


//Function based
export default function Accordion(props) {
  const [buttonClickedIndex, setButtonClickedIndex] = useState(null);

  let toggleButton = (e={currentTarget:{getAttribute:()=>0}}) => {
    buttonClickedIndex !== null && buttonClickedIndex === Number(e.currentTarget.getAttribute('index'))
      ? setButtonClickedIndex(null)
      : setButtonClickedIndex(Number(e.currentTarget.getAttribute('index')))
  }

  let renderList = () => {
    return props.sections.map((section, index) => {
      return (
        <li key={index}>
          {renderButtons(section, index)}
          {buttonClickedIndex === index ? getContent() : void 0}
        </li>
      )
    })
  }

  let renderButtons = (section, index) => {
    return (
      <button key={index} index={index} onClick={toggleButton}>{section.title}</button>
    )
  }

  let getContent = () => {
    return (
      <p>
        {props.sections[buttonClickedIndex].content}
      </p>
    )
  }

  return (
    <ul>{renderList()}</ul>
  )
}

Accordion.defaultProps = { sections: [] };

//Class based

/* export default class Accordion extends React.Component {

  static defaultProps = { sections: [] }

  state = {
    buttonClickedIndex: null
  }

  toggleButton = e => {
    this.state.buttonClickedIndex !== null
      ? this.setState({ buttonClickedIndex: null })
      : this.setState({ buttonClickedIndex: Number(e.currentTarget.getAttribute('index')) })
  }

  renderList = () => {
    return this.props.sections.map((section, index) => {
      return (
        <li>
          {this.renderButtons(section, index)}
          {this.state.buttonClickedIndex === index ? this.getContent() : void 0}
        </li>
      )
    })
  }

  renderButtons = (section, index) => {
    return (
      <button key={index} index={index} onClick={this.toggleButton}>{section.title}</button>
    )
  }

  getContent = () => {
    return (
      <p>
        {this.props.sections[this.state.buttonClickedIndex].content}
      </p>
    )
  }

  render() {
    return (
      <ul>{this.renderList()}</ul>
    )
  }

} */