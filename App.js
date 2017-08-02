// @flow
import StorybookUI from "./storybook"

import App from "./Apply"

/* eslint-disable */
module.exports = __DEV__ ? StorybookUI : App;
