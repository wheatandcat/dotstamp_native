// @flow
import React from "react"
import { Frame } from "./"
/* eslint-disable */
type Props = {
  name: string,
  imageID: number,
  userList: Array<Item>,
  followList: Array<Item>,
  onGet: () => void,
  onUserList: (order: number, page: numbetr, limit: number) => void,
  onFollowList: (order: number, page: numbetr, limit: number) => void,
  onLogout: () => void,
}

export default class Page extends React.Component {
  componentWillMount() {
    this.props.onGet()
    this.props.onUserList(1, 1, 100)
    this.props.onFollowList(1, 1, 100)
  }

  props: Props

  render() {
    const { name, userList, followList, onLogout } = this.props
    console.log(this.props)

    return (
      <Frame
        name={name}
        avatarURL="http://dotstamp.com/static/files/icon/1.jpg"
        userList={userList ? userList : []}
        followList={followList ? followList : []}
        onLogout={onLogout}
      />
    )
  }
}
