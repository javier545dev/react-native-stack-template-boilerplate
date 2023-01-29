# React Native (React Query) Toolkit Start App <!-- omit in toc -->

> A React Native boilerplate app to bootstrap your next app with React-Query!

## Upgraded to the latest React-Native (> 0.71.x)

<br/>
<div align="center">
    <img src="./react-native-starter-kit.png" width="100%" /> 
</div>

[![Issues](https://img.shields.io/github/issues/IronTony/react-native-react-query-starter-app.svg)](https://github.com/IronTony/react-native-react-query-starter-app/issues)

[![Build](https://img.shields.io/badge/iOS%20Tested-success-brightgreen.svg)](https://github.com/IronTony/react-native-react-query-starter-app)
[![Build](https://img.shields.io/badge/Android%20Tested-success-brightgreen.svg)](https://github.com/IronTony/react-native-react-query-starter-app)

# Table of Contents <!-- omit in toc -->

- [Upgraded to the latest React-Native (\> 0.71.x)](#upgraded-to-the-latest-react-native--071x)
- [Installation :inbox\_tray:](#installation-inbox_tray)
- [Rename project and bundles :memo: :package:](#rename-project-and-bundles-memo-package)
  - [iOS \& Android](#ios--android)
- [Environment Setup :globe\_with\_meridians:](#environment-setup-globe_with_meridians)
- [Scripts :wrench:](#scripts-wrench)
  - [Run the app](#run-the-app)
  - [Generate app icons](#generate-app-icons)
  - [Generate Splashscreen](#generate-splashscreen)
  - [To enabled React-Native (Fabric) new architecture](#to-enabled-react-native-fabric-new-architecture)
  - [Setup iOS](#setup-ios)
  - [Typescript (optional)](#typescript-optional)
- [Roadmap :running:](#roadmap-running)

---

## Installation :inbox_tray:

```bash
# Setup your project
> npx degit IronTony/react-native-react-query-starter-app your-new-app

> cd your-new-app

# Install dependencies
> yarn

# if needed, setup iOS development environment
yarn setup:ios
```

See [`environment`](#environment-setup-:globe_with_meridians:) section for how to configure env variables.

See [`scripts`](#scripts-:wrench:) section for how to run the app.

---

## Rename project and bundles :memo: :package:

To rename the project and bundles, just follow these steps:

### iOS & Android

Run `npx react-native-rename [name] -b [bundle-identifier]` from the project root

Example:
`npx react-native-rename "Test New App" -b com.testnewapp`

---

## Environment Setup :globe_with_meridians:

`React Native Starter App` environments variables management is based on a custom script and the `app.json` config file.

Define your environment variables inside `app.json` inside the `environments` object under the desired
environment key (such as `development`, `staging` or `production`) and then run the app for the required env
using one of the available run scripts (e.g. `ios:dev`).

If you want to use IDEs such Xcode or Android Studio, you have to set up the ENV variables with these commands:

- `yarn env:dev`, to set the development ENV variables
- `yarn env:stage`, to set the staging ENV variables
- `yarn env:prod`, to set the production ENV variables

---

## Scripts :wrench:

### Run the app

To run the app use one of the following scripts:

- `yarn android:dev`, to start the app on Android with the `development` environment variables.
- `yarn android:stage`, to start the app on Android with the `staging` environment variables.
- `yarn android:prod`, to start the app on Android with the `production` environment variables.

- `yarn ios:dev`, to start the app on iOS with the `development` environment variables.
- `yarn ios:stage`, to start the app on iOS with the `staging` environment variables.
- `yarn ios:prod`, to start the app on iOS with the `production` environment variables.

### Generate app icons

To setup the app icons:

- create an image at least `1024x1024px`
- place it under `/assets` folder as `icon.png`
- run

```sh
yarn assets:icons
```

### Generate Splashscreen

To setup the app splashscreen:

- create an image at least `1242x2208px`
- place it under `/assets` folder as `splashscreen.png`
- run

```sh
yarn assets:splashscreen
```

### To enabled React-Native (Fabric) new architecture

Check the official documentation [here](https://reactnative.dev/docs/new-architecture-intro)

### Setup iOS

To setup the environment to run on iOS, run

```sh
yarn setup:ios
```

this will run `cocoapods` to install all the required dependencies.

### Typescript (optional)

The use of Typescript in the project is not mandatory.
You can just write all your code using plain Javascript.
Our hint is to create all files as below:

- files with logic and Views with `tsx` extension
- files with Stylesheet and others with `ts` extension

To enable full Typescript checks, just open the `tsconfig.json` file and chage as below:<br/>

```
"noImplicitAny": true, // set to true to be explicit and declare all types now<br/>
"strict": true,  // enable it to use fully Typescript set of invasive rules<br/>
```

_REMEMBER: the entry point file in the root of the project MUST be index.js_

---

## Roadmap :running:

✅ Initial Setup<br/>
✅ Splashscreen (https://github.com/crazycodeboy/react-native-splash-screen)<br/>
✅ Toolbox (https://github.com/panz3r/react-native-toolbox)<br/>
✅ Standard tree folders structure<br/>
✅ `React-Native 0.71`<br/>
✅ `React-query`<br/>
✅ `React-query Custom hooks (eg. GET, POST, PUT, PATCH, DELETE)`<br/>
✅ `React Native Flipper Integration`<br/>
✅ `i18next`<br/>
✅ `React-navigation v6` ❤️<br/>
✅ `Nativebase v3` as design system<br />
✅ `Env` variables selection experimental way<br />
✅ Typescript (optional use. Read the DOC above)<br />

---
