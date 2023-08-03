import React from 'react';
import { shallow } from 'enzyme';
import Slide from '../components/slide/slide';

describe('Slide Component', () => {
  it('should render slide content correctly', () => {
    const slide = {
      title: 'Title 1',
      text: 'This is slide 1',
      slideNumber: 1,
    };
    const wrapper = shallow(<Slide {...slide} />);
    expect(wrapper.find('h2').text()).toEqual('Title 1');
    expect(wrapper.find('p').at(0).text()).toEqual('This is slide 1');
    expect(wrapper.find('p').at(1).text()).toEqual('Slide Number: 1');
  });
});
