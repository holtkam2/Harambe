import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import ThemeButton from '../client/components/ThemeButton.jsx';

describe('front end tests', () => {
  it ('should have a SettingsDisp component', () => {
    let wrapper = shallow(<ThemeButton />)
    expect(wrapper).to.exist;
  })
});