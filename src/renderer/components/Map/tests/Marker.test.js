import React from 'react';
import { create } from 'react-test-renderer';
import Marker from '../Marker';
import hexColorFromString from '../utils/hexColorFromString';

const row = {
  lat: 123.45678,
  long: -12.34567,
  category: 'this is an example category',
  fullAddress: '138 west 12th street, Queens, NY 10018'
}

it('renders correctly', () => {
  const { fullAddress, category, lat, lng } = row;
  const tree = create(
    <Marker
      key={`${lat}-${lng}`}
      lat={lat}
      lng={lng}
      backgroundColor={hexColorFromString(row.category)}
      text={{ fullAddress, category }}

    />
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
