import React from 'react';
import { shallow } from 'enzyme';
import SlideControls from '../components/slideControl.js/slideControls';

describe('SlideControls Component', () => {
  it('should handle button clicks correctly', () => {
    const onNextMock = jest.fn();
    const onPreviousMock = jest.fn();
    const onRestartMock = jest.fn();
    const wrapper = shallow(
      <SlideControls
        isFirstSlide={false}
        isLastSlide={false}
        onNext={onNextMock}
        onPrevious={onPreviousMock}
        onRestart={onRestartMock}
      />
    );
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    expect(onNextMock).toHaveBeenCalled();
    expect(onPreviousMock).toHaveBeenCalled();
    expect(onRestartMock).toHaveBeenCalled();
  });

  it('should disable buttons correctly', () => {
    const wrapper = shallow(
      <SlideControls isFirstSlide={true} isLastSlide={true} />
    );
    expect(wrapper.find('button').at(0).prop('disabled')).toBe(true);
    expect(wrapper.find('button').at(1).prop('disabled')).toBe(true);
    expect(wrapper.find('button').at(2).prop('disabled')).toBe(false);
  });
});
