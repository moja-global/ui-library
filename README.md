<div align="center">
  <img src="https://avatars.githubusercontent.com/u/19564969?v=4" alt="moja global logo" height ="auto" width="200" />
  <br />
  <h1>Moja global UI library</h1>
  <p>
  Repository for the UI library — A Vue.js user-interface library for moja global projects
  </p>
  <p align="center">
    <a href="https://github.com/moja-global/ui-library/graphs/contributors" alt="GitHub contributors">
    <img src="https://img.shields.io/github/contributors/moja-global/ui-library.svg" /></a>
    <a href="https://github.com/moja-global/ui-library/issues" alt="GitHub issues by-label">
    <img src="https://img.shields.io/github/issues/moja-global/ui-library" /></a>
    <a href="https://mojaglobal.slack.com/" alt="Slack">
    <img src="https://img.shields.io/badge/slack-join_chat-brightgreen.svg" /></a>
    <a href="https://twitter.com/mojaglobal" alt="Twitter Follow">
    <img src="https://img.shields.io/twitter/follow/mojaglobal.svg?label=Follow&style=social" /></a>
    <a href="https://github.com/moja-global/ui-library/blob/main/LICENSE" alt="License">
    <img src="https://img.shields.io/github/license/moja-global/ui-library.svg" /></a>
    <a href="https://www.npmjs.com/package/@moja-global/mojaglobal-ui" alt="Npm package">
    <img src="https://badge.fury.io/js/@moja-global%2Fmojaglobal-ui.svg" /></a>
</p>
</div>

## Introduction

[Moja global](http://moja.global/) is a collaboration under the [Linux Foundation](https://linuxfoundation.org/) that aims for the widest possible collaboration on and use of credible tools to better manage the land sector. The flagship software is the [Full Lands Integration Tool (FLINT)](https://github.com/moja-global/flint), a tool to estimate emissions and sinks of greenhouse gasses from forestry and agriculture.

Moja global User-interface (UI) library aims to bring forward an intuitive, consistent, and easy-to-use interface that can help our developers within the User-Interface working group and users to quickly accomplish their tasks. The UI library aims to considerably improve our design & development workflow and meet the acceptable web accessibility requirements for our potential users. A UI library helps us mitigate popular UI-development issues like inconsistent user-experience, performance issues, accessibility requirements and more.
 
## Technologies

- [Vue.js](https://vuejs.org/)
- [Storybook](https://storybook.js.org/)
- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [NPM](https://www.npmjs.com/)

## Components 

| Components | Planned | Implemented |
|------------|---------|------------ |
| Accordion  | ✔       |         ✔  |
| Alert      | ✔       |         ✔  |
| Button     | ✔       |         ✔  |
| Card       | ✔       |         ✔  | 
| Datepicker | ✔       |         ✔  |
| Dropdown   | ✔       |         ✔  |
| Footer     | ✔       |         ✔  | 
| Modal      | ✔       |         ✔  |
| Navbar     | ✔       |         ✔  |
| Slider     | ✔       |         ✔  |
| Sponsor    | ✔       |         ✔  | 
| Toggle     | ✔       |         ✔  |

Find detailed description on our [Storybook setup](https://moja-global-ui-library.vercel.app/?path=/story/components-accordion--primary).

## Installation

To setup the project on your local environment, follow the given steps:

1. Fork the [moja-global/ui-library](https://github.com/moja-global/ui-library) repository.
2. Clone the repository:

```bash
git clone https://github.com/<USERNAME>/ui-library.git && cd ui-library
```
  Replace the `<USERNAME>` with your GitHub username. If you've already forked the repo, you'll want to ensure your fork is configured and that it's up to date. This will save you the headache of potential merge conflicts.  
  
  To sync your fork with the latest changes:
  ```sh
  git checkout main
  git fetch upstream
  git merge upstream/main
  ```
  
3. Install the required dependencies:
```sh
yarn
```

4. To run the Storybook locally
  ```sh
  yarn storybook
  ```

Go to `localhost:6006`_ to view the Storybook.
 
## Contributing

Moja global welcomes contributions to the community website. If you have an idea for a new feature or a bug fix, please submit an issue or pull request. Our planned features can be found on our [Issue Tracker](https://github.com/mojaglobal/ui-library/issues). If you have any questions, please reach out to us on [Slack](https://mojaglobal.slack.com/).
 
### Adding new components
 
1. Replace component_name with your own component name:

    ```sh
    cd mojaglobal-ui 
    mkdir component_name
    cd component_name  
    ```

2. Add all the files related to the component in this directory.

3. Export your component in `ui-library/mojaglobal-ui/src/components/index.js`
 
4. Add a story related to your component in the Storybook.
 
5. Add the details for the component on the `README.md` file.

To add new features or fix bugs, open the corresponding file and do the required changes in the file as well as in its corresponding story

## License

[Mozilla Public License 2.0](https://github.com/moja-global/ui-library/blob/main/LICENSE)
