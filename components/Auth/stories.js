import React from "react"
import { storiesOf } from "@storybook/react-native"
import { action } from "@storybook/addon-actions"
import { Top } from "../../storybook/container"
import Page, { Login, Create } from "./"

storiesOf("Auth", module)
  .add("Create", () => (
    <Top>
      <Create
        email="foo@bar.com"
        password="bar"
        error={{
          message: ""
        }}
        changePassword={action("password")}
        onCrate={action("onCrate")}
      />
    </Top>
  ))
  .add("Create with error", () => (
    <Top>
      <Create
        email="foo@bar.com"
        password="bar"
        error={{
          message: "登録に失敗しました"
        }}
        changePassword={action("password")}
        onCrate={action("onCrate")}
      />
    </Top>
  ))
  .add("Login", () => (
    <Top>
      <Login
        email="foo@bar.com"
        password="bar"
        error={{
          message: ""
        }}
        changePassword={action("password")}
        onLogin={action("onLogin")}
      />
    </Top>
  ))
  .add("Page with login", () => (
    <Page
      email="foo@bar.com"
      password="bar"
      login
      error={{
        message: ""
      }}
      changePassword={action("password")}
      onCrate={action("onCrate")}
      onLogin={action("onLogin")}
    />
  ))
  .add("Page with create", () => (
    <Page
      email="foo@bar.com"
      password="bar"
      login={false}
      error={{
        message: ""
      }}
      changePassword={action("password")}
      onCrate={action("onCrate")}
      onLogin={action("onLogin")}
    />
  ))
