# neat-maps

[https://dillon.global/neat-maps](https://dillon.github.io/neat-maps)

A React webapp that accepts a CSV upload with five columns of up to 20 rows of information. Some sample data is attached in `/files`. The app works for CSVs containing any valid addresses.

## Installation

1. The key in `.env` is restricted, and will only work on `dillon.global/`. Replace the key with your own.
2. `yarn test:watch`
3. `yarn start`

## Details

> Write tests for your code

- All redux reducers have full test coverage.
- The main/complex components, `FileUpload`, `Map`, and `Marker`, have snapshot tests.
- `PropTypes` is used to check all presentational components that take props.

> The app should build and run on localhost, but feel free to host it somewhere (Heroku etc) if you like

- The app runs on localhost if the restricted API key in `.env` is replaced.
- The app is also hosted at [dillon.global/neat-maps](https://dillon.github.io/neat-maps)

## Dependencies

- `@vtex/react-csv-parse` parses csv files into an array of rows.
- `google-map-react` uses the Google Maps API, and allows you to render any React component on the Map.
- `prop-types` for simple prop testing used for all presentational components.
- `redux` and `redux-thunk` for handling async actions. Came in handy especially when fetching geolocations of each address in the csv file.

## devDependencies

- `jest` for testing
- `react-test-renderer` is used in conjunction with `jest` for snapshot testing
- `eslint` and `prettier` for linting
- `gh-pages` for simple deployment to gh-pages
