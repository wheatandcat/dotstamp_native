// @flow
import React from "react"
import { storiesOf } from "@storybook/react-native"
import { action } from "@storybook/addon-actions"
import { Frame } from "./"

storiesOf("Contribution/Search", module).add("Frame", () => (
  <Frame
    list={[]}
    search=""
    changeSearch={action("changeSearch")}
    onSearch={action("onSearch")}
  />
))
