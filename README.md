# React Native Test App

**Used Technologies:**

- React Native & Expo
- Redux & Redux Persist, Redux Thunk (for side effects)
- Typescript for static type checking
- React Native Elements UI Library
- React Navigation v5
- Axios for API Calls
- Jest & React Test Renderer & Enzyme for Unit Testing

**Screenshots:**
<br /> <br />

<img src="https://i.ibb.co/H4wXjrk/Screenshot-2020-10-06-10-48-04-854-host-exp-exponent.jpg" width="400" >

<img src="https://i.ibb.co/cQDCgWD/Screenshot-2020-10-06-10-47-25-965-host-exp-exponent.jpg" width="400" >

<img src="https://i.ibb.co/cvZZWDd/Screenshot-2020-10-06-10-47-31-397-host-exp-exponent.jpg" width="400" >

<img src="https://i.ibb.co/L8QcbJ9/Screenshot-2020-10-06-10-47-41-063-host-exp-exponent.jpg" width="400" >

<img src="https://i.ibb.co/xY4fT25/Screenshot-2020-10-06-10-47-35-725-host-exp-exponent.jpg" width="400" >

<img src="https://i.ibb.co/tLs86PY/Screenshot-2020-10-06-10-47-50-726-host-exp-exponent.jpg" width="400" >

<img src="https://i.ibb.co/0Y50Lyw/Screenshot-2020-10-07-10-16-35-195-host-exp-exponent.jpg" width="400" >

<br /> <br />

# Architecture

I have used **"Container-Presentational Pattern"**. Because I love this pattern as it seperates the business logic from the UI part.

I have also separated services & constants & config variables as separate files.

Let me show the folder structure:

```
src
├── __tests__ => snaphot & unit tests
│   └── components
│   └── screens
├── app_constants => global constant variables
│   └── api.js
│   └── colors.ts
│   └── general.js
│   └── index.js
│   └── layout.ts
│   └── routes.js
│   └── texts.js
│   └── ui.js
├── assets
│   └── fonts
│   └── images
├── components => shared components
│   └── Carousel
│   └── Layout
│   └── List
│   └── Section
│   └── index.js
├── hooks => global hooks
│   └── index.js
│   └── useBackHandler.ts
│   └── useCachedResources.ts
│   └── useColor.ts
│   └── useKeyboardHandler.ts
├── router
│   └── BottomTabNavigator.tsx
│   └── index.tsx
│   └── LinkingConfiguration.ts
├── screens => app screens
│   └── Category
│   └── Favorites
│   └── Home
│   └── MovieDetails
│   └── Profile
│   └── Search
│   └── Welcome
│   └── index.js
│   └── NotFound.tsx
├── services => api calls
│   └── post.ts
├── store => state management
│   └── actions
│   └── reducers
│   └── constants.js
│   └── index.js
├── utils => helper functions
│   └── device.ts
│   └── image.ts
│   └── testing.js
│   └── ui.js
├── app_config.js => global config variables
├── mocks.js => mocks for the tests
├── types.ts => global types

```

# Details

I tried to follow DRY, SOLID principles.

Common(shared) types are in the "types.ts" file. Component specific types are directly in the component files.

Gestures are not working smoothly on iOS due to a bug related to React Navigation 5, therefore I had to disable the animations :(

# Pros & Cons

**Pros:**

- I tried to use clean code & sexy UI as much as possible. Without a good design a product won't be able to succeed ;)

- I have tested the app on both Android and iOS. I have used platform specific code in some sections.

- Redux as the state manager.

- I have separated the business logic from the UI part(Business logic is in the container files, UI related things are in the view files.)

- I have implemented custom hooks. You can check the "src/hooks" folder :)

- Since "KeyboardAvoidingView" component of React Native is a little bit buggy, I have implemented my own keyboard handler. Therefore input field is visible on small screens.

- I have put the styles in separate files for the screen components. However normal shared components have single files(styles are in the components files). This is called "Single File Components" as in Vue.

- For testing I have used some snaphots using react-test-renderer and Enzyme for the real Unit Testing. Normally I use TDD but as I didn't have much time I had to integrate the tests in the end.

- I tried to use as much resuable components as possible. You can check the reusable components in "src/components" folder.

- I have used ES6+ syntax(For example I have preferred async & await instead of promises).

**Cons:**

- Not E2E testing as there wasn't enough time to work on that.

- Not %100 code coverage regarding Unit Testing. However you can check how I am testing the components by checking the implemented tests.

- No feature branchs, regular commits. Normally I should have used feature branchs for the separate features and pushed those changes regularly.

- There are still js files in the project. Some of them should be refactored to typescript.

**Anyway, if I had more time I could solve these issues but it's also important to be aware of these right? =)**
