// @flow
/* eslint-disable no-unused-vars,no-undef */
import { MODE_ENV } from "react-native-dotenv"
import StorybookUI from "./storybook"
import App from "./Apply"

// module.exports = MODE_ENV === "storybook" && __DEV__ ? StorybookUI : App

module.exports = App
// module.exports = StorybookUI
