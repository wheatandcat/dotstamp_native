import React from "react"
import { storiesOf } from "@storybook/react-native"
import { action } from "@storybook/addon-actions"
import { DropMenuIos, DropMenuAndroid } from "./"

storiesOf("DropMenu", module)
  .add("DropMenuIos", () => (
    <DropMenuIos
      buttonIcon="log-out"
      buttonLable="foo"
      buttonOption={{
        iconLeft: true,
        danger: true,
        small: true
      }}
      label="foo"
      onClick={action("onClick")}
    />
  ))
  .add("DropMenuIos with Transparent", () => (
    <DropMenuIos
      buttonIcon="list"
      buttonLable=""
      buttonOption={{
        transparent: true
      }}
      label="foo"
      onClick={action("onClick")}
    />
  ))
  .add("DropMenuAndroid", () => (
    <DropMenuAndroid
      buttonIcon="log-out"
      buttonLable="foo"
      buttonOption={{
        iconLeft: true,
        danger: true,
        small: true
      }}
      label="foo"
      onClick={action("onClick")}
    />
  ))
  .add("DropMenuAndroid with Transparent", () => (
    <DropMenuAndroid
      buttonIcon="list"
      buttonLable=""
      buttonOption={{
        transparent: true
      }}
      label="foo"
      onClick={action("onClick")}
    />
  ))
