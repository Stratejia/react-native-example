# File structure

Here's an explanation for the current file structure in this app:

- `/docs`: Documentation on everything within this app
- `/src`: Source code
  - `/.expo-shared`: Shared expo configuration
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
  - `.eslintrc.js`: Eslint config
  - `.prettierrc.js`: Prettier config
  - `app.json`: Expo app config
  - `App.tsx`: App startup, root node
  - `babel.config.json`: Babel config
  - `package.json`: NPM package definition
  - `tsconfig.json`: TypeScript config
  - `types.d.ts`: Generic types definitions
