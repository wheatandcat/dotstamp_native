import React from "react"
import { storiesOf } from "@storybook/react-native"
import Page, { Text, Image } from "./"

storiesOf("Contribution/Balloon", module)
  .add("Text", () => <Text label="foo" />)
  .add("Image", () => (
    <Image imageURL="http://dotstamp.com/static/files/talk/2.jpg" />
  ))
  .add("Page Text", () => (
    <Page
      label="foobar"
      talkType={1}
      iconURL="http://dotstamp.com/static/files/character/12.jpg"
    />
  ))
  .add("Page Image", () => (
    <Page
      label="12.jpg"
      talkType={2}
      iconURL="http://dotstamp.com/static/files/character/12.jpg"
    />
  ))
