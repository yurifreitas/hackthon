import {shallow} from 'enzyme';
import * as React from 'react';
import NextButton from './NextButton';
import translationsMock from '../../translations/translations-mock';

jest.mock('../../utilities/localStorageService');

const setup = () => {
  return shallow(<NextButton translations={translationsMock} />)
};

describe('NextButton component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });
});
