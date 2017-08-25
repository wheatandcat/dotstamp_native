// @flow
/* eslint-disable no-unused-vars,no-undef */
import { MODE_ENV } from "react-native-dotenv"
import StorybookUI from "./storybook"
import App from "./Apply"

console.log(MODE_ENV)

module.exports = MODE_ENV === "stroybook" && __DEV__ ? StorybookUI : App
// module.exports = App
