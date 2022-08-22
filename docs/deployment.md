# Deployment

How to deploy the app on various devices and test builds.

We use [EAS (Expo Application Services)](https://docs.expo.dev/eas/) to handle app builds.

We have three different profiles for builds:

- Development: Builds with WIP features for a version. Contains a development client (dev tools).
- Preview: Pre-production builds, similar to production builds.
- Production: Builds candidate for release.

## Testing the deployed builds

### Android

Install [Expo Go app](https://expo.dev/client) and link it to your account. There, you will find the latest builds for
the app.

You can open up directly the build in Expo Go, or download the .apk and install it manually.

### iOS

TODO(#28): Document android deployment
