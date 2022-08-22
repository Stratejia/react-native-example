# Deployment

How to deploy the app on various devices and test builds.

We use [EAS (Expo Application Services)](https://docs.expo.dev/eas/) to handle app builds.

## Commands

Use the following yarn command:

```bash
yarn deploy:{platform}:{profile}
yarn deploy:{all,android,ios}:{dev,preview,prod}
```

Platform
- `all`: Both iOS and Android
- `android`: Only deploy Android
- `ios`: Only deploy iOS

Profile
- `dev`: Development, builds with WIP features for a version. Contains a development client (dev tools).
- `preview`: Preview, pre-production builds, similar to production builds.
- `prod`: Production, builds candidate for release.

## Testing the deployed builds

### Android

Install [Expo Go app](https://expo.dev/client) and link it to your account. There, you will find the latest builds for
the app.

You can open up directly the build in Expo Go, or download the .apk and install it manually.

### iOS

TODO(#28): Document android deployment
