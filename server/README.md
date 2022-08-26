# Cat Facts API

[![Build Server](https://github.com/Stratejia/react-native-example/actions/workflows/build-server.yml/badge.svg)](https://github.com/Stratejia/react-native-example/actions/workflows/build-server.yml)

Express API built quickly to reproduce a deprecated Cat Facts API.

This API is a temporary fix to help the mobile app's development. Its purpose is to reproduce some API calls we except.

There is no real database. Cat facts are a simple array stored in RAM. Closing the server's instance flushes the
database.

## Setup

### Install dependencies

```bash
yarn
```

## Available scripts

### Run app

```bash
yarn start
```

App will be running on http://localhost:3000

### Build app

```bash
yarn build
```

### Lint app

```bash
yarn lint:ls # Run code style for file names
yarn lint:fix # Fix code style using eslint

yarn prettier
yarn prettier:write # Fix code style using prettier
```
