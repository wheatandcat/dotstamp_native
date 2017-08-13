import React from "react"
import { storiesOf } from "@storybook/react-native"
import Footer from "./"

storiesOf("Contribution/Footer", module).add("Footer", () =>
  <Footer selected="list" />
)
