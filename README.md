<div align="center">
<img src="https://moja.global/wp-content/uploads/2021/03/Asset-66@4x.png" alt="Moja Global UI Library logo" height ="auto" width="200" /> 

<br />

<h1 align="center">UI Library</h1>

[![npm version](https://badge.fury.io/js/@moja-global%2Fmojaglobal-ui.svg)](https://badge.fury.io/js/@moja-global%2Fmojaglobal-ui)
  </div>

## About
 
## Built with

- [Vue.js](https://vuejs.org/) version 3

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
 

Find detailed description on our [Storybook setup](https://ui-library-au5vxcs10-moja-global.vercel.app/?path=/story/example-accordion--primary)

## Setup

To setup the project in your local environment, follow the given steps

1. Fork the [moja-global/ui-library](https://github.com/moja-global/ui-library) repository.
2. Clone the repository 
```
git clone https://github.com/<USERNAME>/ui-library.git && cd ui-library
```
  Replace the `<USERNAME>` with your GitHub username. If you've already forked the repo, you'll want to ensure your fork is configured and that it's up to date. This will save you the headache of potential merge conflicts.  
  
  To sync your fork with the latest changes:
  ```sh
  git checkout main
  git fetch upstream
  git merge upstream/main
  ```
  
3. Install the required dependencies
```
yarn
```
4. To run the Storybook locally
  ```
  yarn storybook
  ```
Go to `localhost:6006`_ to view the Storybook.
 
## Want to Contribute? 
We are happy to have you onboard :) 
If you want to add a new component, or if you have found any issue or bug, please feel free to contribute and help us in improving the UI Library. 
Please go through these contributing guidelines
 
 ### To add a component, open the terminal and follow the given steps
 
1. Replace component_name with your own component name
    ``` 
    cd mojaglobal-ui 
    mkdir component_name
    cd component_name  
    ```
 2. Add all the files related to the component in this directory.

3. Export your component in `ui-library/mojaglobal-ui/src/components/index.js`
 
4. Add a story related to your component in the storybook.
 
5. Add the details for the component in Readme.md

 ### To add new feature or to resolve a bug in the component
 1. Open the corresponding file and do the required changes in the file as well as in its corresponding story
 
 <br>

## License

moja-global/ui-library project is licensed under the [Mozilla Public License 2.0](https://github.com/moja-global/ui-library/blob/main/LICENSE)


