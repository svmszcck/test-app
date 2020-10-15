# React Native Test App

**Used Technologies:**

- React Native & Expo
- Redux & Redux Persist, Redux Thunk (for side effects)
- Typescript for static type checking
- React Native Elements UI Library
- React Navigation v5
- Axios for API Calls
- Jest & React Test Renderer & Enzyme for Unit Testing

<br>

**UI & UX IS CREATED BY ME 🎉😜**
<br><br>

You can test the app via Appetize using this link:

https://appetize.io/app/6kf045zjy2xyhffwzxbrn4kgd4

You can see the app's screen record here:

https://streamable.com/qrvxdz

<br>

**Screenshots:**
<br /> <br />

<img src="https://i.ibb.co/H4wXjrk/Screenshot-2020-10-06-10-48-04-854-host-exp-exponent.jpg" width="300" >

<img src="https://i.ibb.co/cQDCgWD/Screenshot-2020-10-06-10-47-25-965-host-exp-exponent.jpg" width="300" >

<img src="https://i.ibb.co/xHzgQhq/Screenshot-2020-10-06-10-47-31-397-host-exp-exponent.jpg" width="300" >

<img src="https://i.ibb.co/L8QcbJ9/Screenshot-2020-10-06-10-47-41-063-host-exp-exponent.jpg" width="300" >

<img src="https://i.ibb.co/xY4fT25/Screenshot-2020-10-06-10-47-35-725-host-exp-exponent.jpg" width="300" >

<img src="https://i.ibb.co/tLs86PY/Screenshot-2020-10-06-10-47-50-726-host-exp-exponent.jpg" width="300" >

<img src="https://i.ibb.co/0Y50Lyw/Screenshot-2020-10-07-10-16-35-195-host-exp-exponent.jpg" width="300" >

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
│   └── colors.js
│   └── device.js
│   └── errors.js
│   └── events.js
│   └── general.js
│   └── index.js
│   └── layout.ts
│   └── routes.js
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
├── hooks => custom hooks
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
│   └── NotFound
│   └── Profile
│   └── Search
│   └── Welcome
│   └── index.js
├── services => api calls
│   └── post.ts
├── store => state management
│   └── actions
│   └── reducers
│   └── constants.js
│   └── index.js
├── utils => helper functions
│   └── api.ts
│   └── device.ts
│   └── general.ts
│   └── image.ts
│   └── testing.js
│   └── ui.ts
├── app_config.js => global config variables
├── mocks.js => mocks for the tests
├── types.ts => global types

```

# Details

I tried to follow DRY, SOLID principles.

Common(shared) types are in the "types.ts" file. Component specific types are directly in the component files.

Gestures are not working smoothly on iOS due to a bug related to React Navigation 5, therefore I had to disable the animations :(

In order to run the all tests please do "npm run test". I have added --silent flag to the command to hide the enzyme related warnings :)

If you want to run a single test, you can do this: "jest filename.test.js". If you are getting snapshot errors, you can add "-u" flag to update the snaphot files.

Right now there are **26 tests** and all of them are passing ;) If I had more time I could add more tests :P I am using JSDOM for Enzyme, it allows me to add a fake DOM tree to the React Native code.

<br>

<img src="https://i.ibb.co/CWyV9mp/Ekran-Al-nt-s.png" >

<br>

**Latest things I have worked on:**

- Refactored some hard-coded strings to constant variables
- Fixed a bug related to TheMovieDB API V3(Their V3 API has a bug, basically the order of the query strings are changing the results and that's not expected, therefore i have fixed that by moving api_key param to the end). In addition due to duplicate movies in the results of the paginated api calls, FlatLists were causing bugs & crashes. Therefore I have added indexes at the end of the keys to make sure keys are %100 unique. Problem solved ;)
- Added some missing types for typescript files
- Added validation for the name input for "Welcome" screen
- Performance optimization for "Movie Details" page by using the cached data(I am checking the new movie id and comparing it with the cached id)
- Some visual improvements
- Added more Unit Tests ❤️

# Pros & Cons

**Pros:**

- I tried to use clean code & sexy UI as much as possible. Without a good design a product won't be able to succeed ;)

- I have tested the app on both Android and iOS. I have used platform specific code in some sections.

- Redux as the state manager. I have also used Redux Persist for caching & persistent store.

- I have separated the business logic from the UI part(Business logic is in the container files, UI related things are in the view files.)

- I have implemented custom hooks. You can check the "src/hooks" folder :)

- Since "KeyboardAvoidingView" component of React Native is a little bit buggy, I have implemented my own keyboard handler. Therefore input field is visible on small screens.

- I have put the styles in separate files for the screen components. However normal shared components have single files(styles are in the component files). This is called "Single File Components" as in Vue.

- For testing I have used some snaphots using react-test-renderer and Enzyme for the real Unit Testing. Normally I use TDD but as I didn't have much time I had to integrate the tests in the end.

- I tried to use as much resuable components as possible. You can check the reusable components in "src/components" folder.

- I have used ES6+ syntax(For example I have preferred async & await instead of promises).

**Cons:**

- Not E2E testing as there wasn't enough time to work on that.

- Not %100 code coverage regarding Unit Testing. However you can check how I am testing the components by checking the implemented tests.

- No feature branchs, regular commits. Normally I should have used feature branchs for the separate features and pushed those changes regularly.

- There are still js files in the project. Some of them should be refactored to typescript.

- The validation for the name input should be more precise. It is not allowing some non-english chars.

**Anyway, if I had more time I could solve these issues but it's also important to be aware of these right? =)**
