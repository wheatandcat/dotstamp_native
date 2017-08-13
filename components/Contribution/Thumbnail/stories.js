import React from "react"
import { storiesOf } from "@storybook/react-native"
import Page from "./"

storiesOf("Contribution/Thumbnail", module).add("Page", () =>
  <Page
    id={1}
    user={{
      id: 1,
      name: "foo",
      profileImageID: 1
    }}
    title="foo"
    tags={[
      { id: 1, name: "foo" },
      { id: 2, name: "bar" },
      { id: 3, name: "baz" },
      { id: 4, name: "qux" },
      { id: 5, name: "quux" },
      { id: 6, name: "corge" },
      { id: 7, name: "baz" },
      { id: 8, name: "qux" },
      { id: 9, name: "quux" },
      { id: 10, name: "corgeqqqq" }
    ]}
    createdAt="2017-07-23T20:17:19+09:00"
  />
)
