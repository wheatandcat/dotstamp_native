import React from "react"
import { storiesOf } from "@storybook/react-native"
import { Movie, Frame } from "./"

storiesOf("Contribution/Youtube", module)
  .add("Movie", () => <Movie videoID="4m83DItGME8" />)
  .add("Frame", () => (
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
        body: [],
        movie: {
          movie_type: 1,
          movie_id: "4m83DItGME8",
          movie_status: 1
        },
        createdAt: "2017-07-23T20:17:19+09:00",
        updatedAt: "2017-07-23T20:17:19+09:00"
      }}
    />
  ))
