import React from 'react';
import renderer from 'react-test-renderer';
import Items from './Items'; // Fix the typo by adding a closing single quote here

test('renders correctly when there are no items', () => {
  const tree = renderer.create(<Items />).toJSON();
  expect(tree).toMatchSnapshot();
});