// @flow
/* eslint-disable no-unused-vars */
import { MODE_ENV } from "react-native-dotenv"
import StorybookUI from "./storybook"
import App from "./Apply"

module.exports = MODE_ENV === "stroybook" ? StorybookUI : App
// module.exports = App
