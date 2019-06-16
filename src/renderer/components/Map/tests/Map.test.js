import React from 'react';
import { create } from 'react-test-renderer';
import Map from '../Map';


const mockFiles = [
  [
    {
      "category": "restricted density multiple dwelling",
      "lat": 37.4210863,
      "lng": -122.2121601,
      "fullAddress": "2800 Sand Hill Road, Menlo Park, CA 94025"
    }
  ],
  [
    {
      "category": "restricted density multiple dwelling",
      "lat": 37.4210863,
      "lng": -122.2121601,
      "fullAddress": "2800 Sand Hill Road, Menlo Park, CA 94025"
    },
    {
      "category": "historic preservation overlay zone",
      "lat": 37.5454017,
      "lng": -122.2711919,
      "fullAddress": "919 Edgewater Blvd, Foster City, CA 94404"
    },
    {
      "category": "limited manufacturing",
      "lat": 37.5193225,
      "lng": -122.2704399,
      "fullAddress": "1309 Elmer St A, Belmont, CA 94002"
    },
  ],
]

it('renders correctly', () => {
  const tree = create(
    <Map
      files={mockFiles}
      index={1}
    />
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
