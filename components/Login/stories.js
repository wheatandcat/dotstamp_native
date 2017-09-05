import React from "react"
import { storiesOf } from "@storybook/react-native"
import { action } from "@storybook/addon-actions"
import { Frame, Form, Platform } from "./"

storiesOf("Login", module)
  .add("Frame", () =>
    <Frame
      email="foo"
      password="bar"
      error={{
        message: ""
      }}
      changeEmail={action("email")}
      changePassword={action("password")}
    />
  )
  .add("Form", () =>
    <Form
      email="foo"
      password="bar"
      error={{
        message: ""
      }}
      changeEmail={action("email")}
      changePassword={action("password")}
    />
  )
  .add("Form with error", () =>
    <Form
      email="foo"
      password="bar"
      error={{
        message: "メールアドレスとパスワードが一致しません"
      }}
      changeEmail={action("email")}
      changePassword={action("password")}
    />
  )
  .add("Platform", () => <Platform />)
