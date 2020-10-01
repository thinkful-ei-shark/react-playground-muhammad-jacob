import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

describe('Accordion Component', () => {
  it('should render to the UI', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should render empty with no supplied sections prop', () => {
    const json = toJson(shallow(<Accordion />));
    expect(json).toMatchSnapshot();
  })

  it('should render just the buttons, none expanded', () => {
    const json = toJson(shallow(<Accordion sections={sections} />));
    expect(json).toMatchSnapshot();
  })

  it('should render first button expanded', () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    wrapper.find('button').at(1).simulate('click');
    const json = toJson(wrapper);
    expect(json).toMatchSnapshot();
  })

  it('should render expanded of the last button that was clicked', () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    const json = toJson(wrapper);
    expect(json).toMatchSnapshot();
  })

})