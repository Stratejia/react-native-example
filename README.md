# React-Native Example

[![Build](https://github.com/Stratejia/react-native-example/actions/workflows/build.yml/badge.svg)](https://github.com/Stratejia/react-native-example/actions/workflows/build.yml)

React-Native example, using TypeScript, styled-components and expo

[Read the docs](docs/index.md)

Made with love by [Stratéjia](https://www.stratejia.ca/).

Check the
[project board](https://github.com/orgs/Stratejia/projects/3/views/1)
for what we want to do next.

To contribute, make sure you have read the [docs](docs/index.md) and
[contribution guide](CONTRIBUTING.md).

## Setup

### Install dependencies

```bash
yarn
```

## Available scripts

### Lint app

```bash
yarn lint:ls # Run code style for file names
yarn lint:staged # Run code style fix on staged files
yarn lint:fix # Fix code style using eslint

yarn prettier
yarn prettier:write # Fix code style using prettier
```

### Run tests

```bash
yarn test
yarn test:watch # If you need to --watch
```

### Eject app

Generates native configuration to run the app on a real device.

```bash
yarn eject
```

### Build app

```bash
yarn build:android
yarn build:ios
```

### Run app

```bash
yarn start # Generic start, you can then choose which device
yarn start:web
yarn run:android
yarn run:ios
```
