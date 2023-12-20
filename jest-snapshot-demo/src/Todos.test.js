import React from 'react';
import renderer from 'react-test-renderer';
import Todos from './Todos';

it("renders correctly when there are no todos", () => {
const tree = renderer.create(<Todos todos={[]}/>).toJSON();
expect(tree).toMatchSnapshot();
});
