# FirebaseList
[![Build Status](https://travis-ci.org/bradtaniguchi/firebase-list.svg?branch=master)](https://travis-ci.org/bradtaniguchi/firebase-list/settings)  

A simple, firebase application using angular, angular material, firebase, and travis CI.

## Contents
*  [Summary](#summary)
*  [Demo](#demo)
*  [Firebase-tools](#firebase-tools)
*  [Required Environment Variables](#required_Environment_Variables)
*  [Development server with angular-cli](#Development_server_with_angular-cli)
*  [Contributing and Licensing](#Contributing_and_Licensing)
*  [Code scaffolding with angular-cli](#Code_scaffolding_with_angular-cli)
*  [Building with angular-cli](#Building_with_angular-cli)
*  [Running unit tests with angular-cli](#Running_unit_tests_with_angular-cli)
*  [Installing](#installing)

## Summary

Firebase-list is a keep.google.com clone, made using angular5+, angular material5+, firebase hosting, firestore and angular-firestore2. It is built as a proof of concept of using angular with firebase and continuous integration tools.

## Demo

Demo is on the way, (there is currently no deployment)

## Firebase-tools 

To support deployment via `npm run deploy`, you will need to install firebase-tools via npm with the following command: `npm install -g firebase-tools`

## Required Environment variables and dotenv

This application requires a few dotenv or environment variables to handle sensitive project information. **If you fail to set some or all of these environment variables your application will load an empty page.** The following environment variables are required by the application for development and deployment. Any firebase environment variables can be found on the settings page for your firebase project.
*  `FIREBASE_PROJECT_ID` - the project id on firebase.
*  `FIREBASE_API_KEY` - the project api key on firebase. 

You can get started with firebase by visiting [here](https://firebase.google.com/)
## Development server with angular-cli

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding with angular-cli

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Building with angular-cli

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests with angular-cli

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
You could also run `ng test:ci` to execute unit tests for continuous integration systems ([travis-ci](http://www.travis.org/))

## Running end-to-end tests with angular-cli

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
You could also run `ng e2e:ci` to execute end-to-end tests for continuous integration systems ([travis-ci](http://www.travis.org/))

## Further help with angular-cli

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Contributing and Licensing

Anyone can use this application as a a reference or guide for their own endevours. Contributions would be nice, but are not expected, as this is mostly a personal project. 

---
The MIT License

Copyright (c) 2010-2017 Google, Inc. http://angularjs.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

