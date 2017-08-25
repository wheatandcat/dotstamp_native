import React from "react"
import { storiesOf } from "@storybook/react-native"
import Page, { Form, Platform } from "./"

storiesOf("Login", module)
  .add("Page", () => <Page />)
  .add("Form", () => <Form />)
  .add("Platform", () => <Platform />)
