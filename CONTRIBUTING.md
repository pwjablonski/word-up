# Getting Started

### Checking out the code

Word Up uses Git and GitHub for source control and code collaboration. To contribute, you’ll need your own copy of codebase, in two places: on GitHub, and on your computer.

* Go to the [Word Up repo on GitHub](https://github.com/pwjablonski/word-up) and click the **Fork** button in the top-right
* In your terminal, clone the repository with Git, linking it to both the official repo and your fork:

  ```sh
  $ git clone -o upstream https://github.com/pwjablonski/word-up.git
  $ cd word-up
  $ git remote add origin https://github.com/YOURUSERNAME/word-up.git
  $ git fetch origin
  ```

  Be sure to replace `YOURUSERNAME` on the last line with your GitHub username.

### Running the code locally

Make sure you have a local installation of [Node.js](https://nodejs.org/en/download/) and [yarn](https://yarnpkg.com/lang/en/docs/install/).

Once you’ve got it run:

```bash
$ yarn install
```

That'll pull down the dependencies. Then run:

```bash
$ yarn start
```
### Running tests
Before opening a pull request, make sure tests pass by running

```bash
$ yarn test
```
To just run linting enter

```bash
$ yarn lint
```

# Deployment
The application is deployed to Firebase web hosting, using Travis CI to build and push the app. This all happens automatically any time code is merged into the master branch on GitHub.

The deployment process is configured in the .travis.yml file in the root of the project. Most environment variables used in production are configured in the project settings on travis-ci.com 
