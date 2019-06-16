import React from 'react';
import { create } from 'react-test-renderer';
import FileUpload from '../FileUpload';

it('renders correctly', () => {
  const tree = create(
    <FileUpload
      numberOfFiles={2}
      fileNames={['name1', 'name2']}
      message="message1"
      index={0}
    />
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
