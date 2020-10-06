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

<img src="https://i.ibb.co/VM092Dt/Screenshot-2020-10-06-10-47-55-799-host-exp-exponent.jpg" width="400" >

<br /> <br />

# Architecture

I have used **"Container-Presentational Pattern"**. Because I love this pattern as it seperates the business logic from the UI part.

I have also separated services & constants & config variables as separate files.

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

**Cons:**

- Not E2E testing as there wasn't enough time to work on that.

- Not %100 code coverage for the Unit Tests.

- No feature branchs, regular commits. Normally I should have used feature branchs for the separate features and pushed those changes regularly.

**Anyway, if I had more time I could solve these issues but it's also important to be aware of these right? =)**
