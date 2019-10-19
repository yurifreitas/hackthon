import { shallow } from 'enzyme';
import * as React from 'react';
import { UserProfile } from './UserProfile';
import translationsMock from '../../translations/translations-mock';

jest.mock('../../utilities/localStorageService');

const setup = () => {
  // @ts-ignore
  return shallow(<UserProfile translations={translationsMock} changeUsername={jest.fn()}/>)
};

describe('UserProfile component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });

});
