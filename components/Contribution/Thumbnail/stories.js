import React from "react"
import { storiesOf } from "@storybook/react-native"
import Page, { MatchText } from "./"
import Center from "../../../storybook/container"

storiesOf("Contribution/Thumbnail", module)
  .add("Page", () => (
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
      search=""
      match=""
      createdAt="2017-07-23T20:17:19+09:00"
    />
  ))
  .add("Page with Search", () => (
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
      search="lhoaklhklalksnbk,nslabcdefghijkljknslkbnbankjsbnvbmlsvnkllbnbnb kbdnkjdnmn"
      match="abc"
      createdAt="2017-07-23T20:17:19+09:00"
    />
  ))
  .add("MatchText", () => (
    <Center>
      <MatchText text="abcdefghijklmn" match="abc" />
    </Center>
  ))
  .add("MatchText with over", () => (
    <Center>
      <MatchText
        text="ilhoaklhklalksnbk,nslabcdefghijkljknslkbnbankjsbnvbmlsvnkllbnbnb kbdnkjdnmn"
        match="abc"
      />
    </Center>
  ))
