# File structure

Here's an explanation for the current file structure in this app:

- `/.expo-shared`: Shared expo configuration
- `/android`: Android config
- `/docs`: Documentation on everything within this app
- `/ios`: iOS config
- `/src`: Source code
  - `/assets`: Static assets of app
    - `/fonts`: Fonts used in the app
    - `/images`: Images used in the app
  - `/components`: Generic components used throughout the app
    - `/icons`: Icons as components
    - `/layouts`: Layouts implemented by screen components
    - `/navigation`: Navigation-specific components
    - `/typography`: Text as components
  - `/domain`: Domain modules
    - `/common`: Generic domain module
      - `/screens`: Generic screens
    - `/nfc`: NFC domain module
      - `/components`: NFC-specific components
      - `/screens`: NFC-specific screens
      - `/utils`: NFC-specific utility functions
  - `/hooks`: Generic hooks
  - `/router`: Routes definitions
  - `/styles`: Styles definitions
  - `/types`: Types definitions
  - `App.tsx`: App startup, root node
  - `index.js`: Native entry point
- `.eslintrc.js`: Eslint config
- `.prettierrc.js`: Prettier config
- `app.json`: Expo app config
- `babel.config.json`: Babel config
- `metro.config.json`: Metro config
- `package.json`: NPM package definition
- `tsconfig.json`: TypeScript config
