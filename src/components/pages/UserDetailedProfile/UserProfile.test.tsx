import { shallow } from 'enzyme';
import * as React from 'react';
import { UserProfileDetail } from './UserProfileDetail';
import translationsMock from '../../../translations/translations-mock';

jest.mock('../../utilities/localStorageService');

const setup = () => {
  // @ts-ignore
  return shallow(<UserProfileDetail translations={translationsMock} changeUsername={jest.fn()}/>)
};

describe('UserProfileDetail component', () => {
  it('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null)
  });

});
