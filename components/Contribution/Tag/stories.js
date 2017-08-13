import React from "react"
import { storiesOf } from "@storybook/react-native"
import Page, { Link } from "./"

storiesOf("Contribution/Tag", module)
  .add("Link", () => <Link name="foo" />)
  .add("Link with over", () => <Link name="foo" />)
  .add("Page", () =>
    <Page tags={[{ id: 1, name: "foo" }, { id: 2, name: "bar" }]} />
  )
  .add("Page with over", () =>
    <Page
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
    />
  )
