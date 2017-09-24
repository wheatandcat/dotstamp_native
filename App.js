// @flow
/* eslint-disable no-unused-vars,no-undef */
import { MODE_ENV } from "react-native-dotenv"
import StorybookUI from "./storybook"
import App from "./Apply"

console.log(MODE_ENV)
console.log("AAA")
// module.exports = MODE_ENV === "storybook" && __DEV__ ? StorybookUI : App

module.exports = App
// module.exports = StorybookUI
