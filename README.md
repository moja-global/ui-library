<div align="center">
<img src="https://avatars.githubusercontent.com/u/19564969?v=4" alt="moja global logo" height ="auto" width="200" />
<br />
<h1>UI Library</h1>
<p>
Elegant design system &amp; Vue.js 3 UI library for moja global .
</p>
<p align="center">
<a href="https://github.com/moja-global/ui-library" alt="GitHub contributors">
<img src="https://img.shields.io/github/contributors/moja-global/ui-library.svg" /></a>
<a href="https://github.com/moja-global/ui-library" alt="GitHub issues by-label">
<img src="https://img.shields.io/github/issues/moja-global/ui-library" /></a>
<a href="https://mojaglobal.slack.com/" alt="Slack">
<img src="https://img.shields.io/badge/Slack-@moja-global.svg?logo=slack" /></a>
<a href="https://github.com/moja-global/ui-library" alt="Twitter Follow">
<img src="https://img.shields.io/twitter/follow/mojaglobal.svg?label=Follow&style=social" /></a>
<a href="https://github.com/moja-global/ui-library" alt="License">
<img src="https://img.shields.io/github/license/moja-global/ui-library.svg" /></a>
</p>
</div>

## Introduction

[Moja global](http://moja.global/) is a collaboration under the [Linux Foundation](https://linuxfoundation.org/) that aims for the widest possible collaboration on and use of credible tools to better manage the land sector. The flagship software is the [Full Lands Integration Tool (UI library)](https://github.com/moja-global/ui-library), a tool to provide instant code based ui components to be used directly as components.

We want to:

- Keep the designs consistent.
- Use Elegant design components for our moja-global website.
- Less time in coding ui-components again and again.

## Technology Stack

We use a variety of technologies to build the web interface and support the community. They include:

- [Algolia DocSearch](https://www.algolia.com/)
- [GitHub Actions](https://github.com/features/actions)
- [Vercel](https://vercel.com/)
- [Vue](https://vuejs.org/)


## Installation

We recommend using the Yarn package manager to install the project.

1. Fork the [ui-library repository](https://github.com/moja-global/ui-library).
2. Clone the repository:
  ```sh
  git clone git@github.com:<USERNAME>/ui-library.git 
  ```
  Replace the `<USERNAME>` with your GitHub username. If you've already forked the repo, you'll want to ensure your fork is configured and that it's up to date. This will save you the headache of potential merge conflicts. To configure your fork:
  ```sh
  git remote add upstream https://github.com/moja-global/ui-library.git
  ```
  To sync your fork with the latest changes:
  ```sh
  git checkout main
  git fetch upstream
  git merge upstream/main
  ```
3. Install the project:
  ```sh
  yarn
  ```
4. Start the project:
  ```sh
  yarn start storybook
  ```
6. Build the project:
  ```sh
  yarn build
  ```
7. Serve the project:
  ```sh
  yarn serve
  ```
