// @flow
import React from "react"
import { Frame } from "./"

type Props = {}

export default class Page extends React.Component {
  componentWillMount() {}
  props: Props

  render() {
    return (
      <Frame
        name="foo"
        avatarURL="http://dotstamp.com/static/files/icon/1.jpg"
        userList={[]}
        followList={[]}
      />
    )
  }
}
