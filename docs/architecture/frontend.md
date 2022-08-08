# Frontend

## Software architecture

A simple Expo (React Native) app built in TypeScript. File structure explains pretty well the software architecture.

## UI Components

UI Components are documented using via storybook.

To run storybook locally, refer to `frontend`'s `README.md` file.

TODO: Once Storybook is deployed, link it here.

## Backend communication

We send simple API calls with `axios` in isolated functions. `src/domain/cats/api/getRandomCatFacts.ts` is a good example.

Mock data can be injected instead of calling the API. To use it, refer to listed environment variables listed in
`src/config/features-env.ts`.

TODO: Once data validation is implemented (not form, API response data validation), explain here

## File structure

For more info, see Expo file structure.

- `/.expo-shared`: Shared expo configuration
- `/android`: Android config
- `/docs`: Documentation on everything within this app
- `/ios`: iOS config
- `/src`: Source code
  - `/assets`: Static assets of app
    - `/fonts`: Fonts used in the app
    - `/images`: Images used in the app
  - `/components`: Generic components used throughout the app
    - `/data`: Data display components
    - `/feedback`: Screen feedback components
    - `/icons`: Icons as components
    - `/inputs`: Components requiring user inputs
    - `/layouts`: Layouts implemented by screen components
    - `/navigation`: Navigation-specific components
    - `/surfaces`: Background components
    - `/typography`: Text as components
  - `/config`: Generic config (like feature flags)
  - `/contexts`: Generic contexts (~HOCs)
  - `/domain`: Domain modules
    - `/about`: About us domain module
    - `/common`: Generic domain module
      - `/screens`: Generic screens
    - `/cats`: Cats domain module
      - `/api`: Cats-specific API calls
      - `/components`: Cats-specific components
      - `/mocks`: Cats-specific mock data
      - `/screens`: Cats-specific screens
  - `/hooks`: Generic hooks
  - `/locales`: Translations
  - `/router`: Routes definitions
  - `/styles`: Styles definitions
  - `/types`: Types definitions
  - `App.tsx`: App startup, root node
  - `index.js`: React Native entry point
- `.eslintrc.js`: Eslint config
- `.prettierrc.js`: Prettier config
- `.stylelintrc.js`: Stylelint config
- `app.json`: Expo app config
- `babel.config.json`: Babel config
- `metro.config.json`: Metro config
- `package.json`: NPM package definition
- `tsconfig.json`: TypeScript config

### Development files

- `/**/__stories__`: Stories of UI components
- `/**/__tests__`: Unit tests
- `/**/__stubs__`: Stubs (fake data) used for tests
- `/**/__mocks__`: Mocks (mocked functionalities) used for tests
