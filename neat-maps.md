# Neat Maps

## Instructions

- [x] The purpose of this test is to assess front-end web development skills in general, with a heavy emphasis on JavaScript.
- [x] There are no restrictions to how you should go about doing this test.
- [x] Please don’t use jQuery or CoffeeScript.
- [x] Your UI should be intuitive for a user who may not be particularly tech savvy.
- [x] Style it however you like, aesthetics are not important as long as the app looks reasonably presentable.
- [x] Write tests for your code. It is up to you to decide what type of tests and what extent of coverage is appropriate.
- [x] Use git like you would in a real project and maintain a proper history.
- [x] The app should build and run on localhost, but feel free to host it somewhere (Heroku etc) if you like.
- [x] Publish the project to Github.

## Requirements

- [x] Build a webapp that will accept a CSV upload with five columns of up to 20 rows of information. Some sample data is attached to this gist. The app should work for CSVs containing any valid US address.

- [x] Upon a successful upload, the app should ask the user to specify, **without any keyboard input from the user**, which column is the `ADDRESS`, `CITY`, `STATE`, `ZIPCODE`, and `CATEGORY` (category can be any text string e.g. `'one-family dwelling'`, `'limited commercial'`, `'historic preservation overlay zone'`).
- [x] Once the user has specified which column is associated with which type of data, the app should display all of the addresses on a map with a different colored marker for each category. Use the [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/adding-a-google-map)
- [x] The app should "save" 3 most recent uploads, e.g. As a user, after uploading 3 CSVs in succession, I would like to be able to click a button (one out of 3 buttons) that loads data from the 1st (or 2nd) upload into the map.

- [x] Wrap the app with a sign-in page, and make sure the app is “protected” against anonymous users. Use this [API](https://neat-api-docs.herokuapp.com/#authentication). Ignore “real-world” security concerns. No need to make sign-up functionality, use curl (or equivalent/similar) to create users in the database if necessary.
