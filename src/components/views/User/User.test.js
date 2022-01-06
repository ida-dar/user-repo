import React from 'react';
import { shallow } from 'enzyme';
import User from './User';

describe('User', () => {
  it('renders without crashing', () => {
    const component = shallow(<User user={[{a: 'a'}, {b: 'b'}]} request={{a: 'a'}} />);
    expect(component).toBeTruthy();
  });

});
