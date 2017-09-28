import React from 'react';
import { shallow } from 'enzyme';

import Title from './../Title';

test('Title shoud be render', () => {
  const title = shallow(<Title />);

  expect(title).toMatchSnapshot();
});
