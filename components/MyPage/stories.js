import React from "react"
import { storiesOf } from "@storybook/react-native"
import { Frame } from "./"

storiesOf("MyPage", module).add("Frame", () =>
  <Frame
    name="foo"
    avatarURL="http://dotstamp.com/static/files/icon/1.jpg"
    userList={[
      {
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
        viewStatus: 1,
        search: "",
        body: [],
        movie: {
          movie_type: 1,
          movie_id: "foo",
          movie_status: 1
        },
        createdAt: "2017-07-23T20:17:19+09:00",
        updatedAt: "2017-07-23T20:17:19+09:00"
      },
      {
        id: 2,
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
        viewStatus: 1,
        search: "",
        body: [],
        movie: {
          movie_type: 1,
          movie_id: "foo",
          movie_status: 1
        },
        createdAt: "2017-07-23T20:17:19+09:00",
        updatedAt: "2017-07-23T20:17:19+09:00"
      }
    ]}
    followList={[
      {
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
        viewStatus: 1,
        search: "",
        body: [],
        movie: {
          movie_type: 1,
          movie_id: "foo",
          movie_status: 1
        },
        createdAt: "2017-07-23T20:17:19+09:00",
        updatedAt: "2017-07-23T20:17:19+09:00"
      },
      {
        id: 2,
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
        viewStatus: 1,
        search: "",
        body: [],
        movie: {
          movie_type: 1,
          movie_id: "foo",
          movie_status: 1
        },
        createdAt: "2017-07-23T20:17:19+09:00",
        updatedAt: "2017-07-23T20:17:19+09:00"
      }
    ]}
  />
)
