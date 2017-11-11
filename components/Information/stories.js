import React from "react"
import { storiesOf } from "@storybook/react-native"
import { action } from "@storybook/addon-actions"
import Page, { Terms } from "./"

storiesOf("Information", module)
  .add("Page", () => <Page />)
  .add("Terms", () => <Terms open onSetOpen={action("onSetOpen")} />)
