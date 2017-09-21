import React from "react"
import { storiesOf } from "@storybook/react-native"
import { action } from "@storybook/addon-actions"
import { Top } from "../../storybook/container"
import Page, { Form } from "./"

storiesOf("Auth", module)
  .add("Form", () => (
    <Top>
      <Form
        email="foo@bar.com"
        password="bar"
        error={{
          message: ""
        }}
        changePassword={action("password")}
      />
    </Top>
  ))
  .add("Form with error", () => (
    <Top>
      <Form
        email="foo@bar.com"
        password="bar"
        error={{
          message: "登録に失敗しました"
        }}
        changePassword={action("password")}
      />
    </Top>
  ))
  .add("Page", () => (
    <Page
      email="foo@bar.com"
      password="bar"
      error={{
        message: ""
      }}
      changePassword={action("password")}
    />
  ))
