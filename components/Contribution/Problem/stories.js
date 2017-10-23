import React from "react"
import { storiesOf } from "@storybook/react-native"
import { action } from "@storybook/addon-actions"
import Page, { Select } from "./"

storiesOf("Contribution/Problem", module)
  .add("Page", () => (
    <Page
      itemId={1}
      value={1}
      sent={false}
      onSelectClick={action("onSelectClick")}
      onSubmitClick={action("onSubmitClick")}
    />
  ))
  .add("Page with sent", () => (
    <Page
      itemId={1}
      value={1}
      sent
      onSelectClick={action("onSelectClick")}
      onSubmitClick={action("onSubmitClick")}
    />
  ))
  .add("Select", () => <Select value={1} onClick={action("onClick")} />)
