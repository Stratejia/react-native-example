# React-Native Example

[![Build](https://github.com/Stratejia/react-native-example/actions/workflows/build.yml/badge.svg)](https://github.com/Stratejia/react-native-example/actions/workflows/build.yml)

React-Native example, using TypeScript, styled-components and expo

[Read the docs](https://stratejia.github.io/react-native-example/)

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

### Install pre-commit hook

```bash
yarn prepare
```

## Available scripts

### Run app

```bash
yarn start # Generic start, you can then choose which device
yarn start:web

# Run on emulator
yarn run:android
yarn run:ios
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

### Deploy app

You can build on the cloud with EAS.

More documentation is provided in [`docs/deployment.md`](./docs/deployment.md).

```bash
yarn deploy:<platform>:<profile>
yarn deploy:{all,android,ios}:{dev,prod,preview}

# All devices
yarn deploy:all:dev
yarn deploy:all:preview
yarn deploy:all:prod

# Android
yarn deploy:android:dev
yarn deploy:android:preview
yarn deploy:android:prod

# iOS
yarn deploy:ios:dev
yarn deploy:ios:preview
yarn deploy:ios:prod
```

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
