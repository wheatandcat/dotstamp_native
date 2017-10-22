import React from "react"
import { storiesOf } from "@storybook/react-native"
import { action } from "@storybook/addon-actions"
import Page, { Select } from "./"

storiesOf("Contribution/Problem", module)
  .add("Page", () => (
    <Page
      itemId={1}
      value={1}
      onSelectClick={action("onSelectClick")}
      onSubmitClick={action("onSubmitClick")}
    />
  ))
  .add("Select", () => <Select value={1} onClick={action("onClick")} />)
