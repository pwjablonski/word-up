# Word Up

Word Up is a playground for crossword puzzle creators! Go to https://word-up-prod.web.app/ to check it out!

Happy Constructing!!!

## Features
- Word lookup using [Datamuse Api](http://www.datamuse.com/api/) makers of [OneLook](https://www.onelook.com/)
- Toggle Symmetry Button
- Random Grid Generator
- Auto save Puzzles
- Download to NY Times submission PDF

Check out the [Road Map](https://github.com/pwjablonski/word-up/projects/1) to see what in the works! 

To request a feature or report a bug file you can file an issue [here](https://github.com/pwjablonski/word-up/issues/new)

## Tech
Word Up uses [**React**](https://facebook.github.io/react/) to render views,
[**Redux**](http://redux.js.org/) to manage application state,
[**Firebase**](https://firebase.google.com/) for data persistence, authentication and hosting,

### Architecture Overview

The architecture of code base is best understood through the
lifecycle of a user interaction:

- User interactions are first captured by handlers in React
  [components](https://github.com/pwjablonski/word-up/tree/master/src/components).
- The component dispatches one or more Redux
  [actions](https://github.com/pwjablonski/word-up/tree/master/src/actions).
- Dispatched actions are consumed by the
  [reducers](https://github.com/pwjablonski/word-up/tree/master/src/reducers),
  which update the
  [store](https://github.com/pwjablonski/word-up/blob/master/src/store.js).
- Asynchronus proccesing such as requests to the database are handled by [logics](https://github.com/pwjablonski/word-up/blob/master/src/logic)
- When the action lifecycle is complete, the components receive updated
  data via [selectors](https://github.com/pwjablonski/word-up/blob/master/src/selectors) and render accordingly

## Contributing 
Interested in contributing to Word Up?? Head over to the [Contribution Guidlines](CONTRIBUTING.md) to get started!

## Contributors
Peter Jablonski

## License
Popcode is distributed under the MIT license. See the attached LICENSE file for details.

Contributors