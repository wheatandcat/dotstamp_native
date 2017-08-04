import React from "react"
import { storiesOf } from "@storybook/react-native"
import { Header } from "./"

storiesOf("Contribution/Show", module).add("Header", () =>
  <Header
    name="foo"
    avatarURL="http://dotstamp.com/static/files/icon/1.jpg"
    title="fooとbarとfoobarの法則"
    createdAt="2017-01-01 10:00:00"
    followCount={1}
    following={false}
  />
)
