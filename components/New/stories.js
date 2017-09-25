import React from "react"
import { storiesOf } from "@storybook/react-native"
import { action } from "@storybook/addon-actions"
import { Top } from "../../storybook/container"
import { Frame, Form, Platform } from "./"

storiesOf("New", module)
  .add("Frame", () => (
    <Frame
      email="foo"
      password="bar"
      error={{
        message: ""
      }}
      changeEmail={action("email")}
      changePassword={action("password")}
      onCreate={action("onCreate")}
    />
  ))
  .add("Form", () => (
    <Top>
      <Form
        email="foo"
        password="bar"
        error={{
          message: ""
        }}
        changeEmail={action("email")}
        changePassword={action("password")}
        onCreate={action("onCreate")}
      />
    </Top>
  ))
  .add("Form with error", () => (
    <Top>
      <Form
        email="foo"
        password="bar"
        error={{
          message: "メールアドレスとパスワードが一致しません"
        }}
        changeEmail={action("email")}
        changePassword={action("password")}
        onCreate={action("onCreate")}
      />
    </Top>
  ))
  .add("Platform", () => (
    <Top>
      <Platform />
    </Top>
  ))
