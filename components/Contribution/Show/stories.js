import React from "react"
import { storiesOf } from "@storybook/react-native"
import { Frame, Header, List } from "./"

storiesOf("Contribution/Show", module)
  .add("Header", () =>
    <Header
      name="foo"
      avatarURL="http://dotstamp.com/static/files/icon/1.jpg"
      title="fooとbarとfoobarの法則"
      createdAt="2017-01-01 10:00:00"
      followCount={1}
      following={false}
    />
  )
  .add("List", () =>
    <List
      body={[
        {
          body: "foo",
          character: { id: 7, fileName: "1.jpg", voiceType: 0 },
          directionType: 1,
          priority: 0,
          talkType: 1
        },
        {
          body: "12.jpg",
          character: { id: 7, fileName: "1.jpg", voiceType: 0 },
          directionType: 2,
          priority: 1,
          talkType: 2
        },
        {
          body: "bar",
          character: { id: 7, fileName: "3.jpg", voiceType: 0 },
          directionType: 1,
          priority: 2,
          talkType: 1
        }
      ]}
    />
  )
  .add("Frame", () =>
    <Frame
      item={{
        id: 1,
        user: {
          id: 1,
          name: "foo",
          profileImageID: 1
        },
        title: "foo",
        tags: [
          {
            id: 1,
            name: "foo"
          }
        ],
        followCount: 1,
        following: false,
        viewStatus: 1,
        search: "",
        body: [
          {
            body: "foo",
            character: { id: 7, fileName: "1.jpg", voiceType: 0 },
            directionType: 1,
            priority: 0,
            talkType: 1
          },
          {
            body: "bar",
            character: { id: 7, fileName: "3.jpg", voiceType: 0 },
            directionType: 1,
            priority: 1,
            talkType: 1
          }
        ],
        movie: {
          movie_type: 1,
          movie_id: "foo",
          movie_status: 1
        },
        createdAt: "2017-07-23T20:17:19+09:00",
        updatedAt: "2017-07-23T20:17:19+09:00"
      }}
    />
  )
