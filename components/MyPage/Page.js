// @flow
import React from "react"
import type { Item } from "../Contribution/type"
import { iconURL } from "../../libs/image"
import { Frame } from "./"

type Props = {
  name: string,
  imageID: number,
  userList: Array<Item>,
  followList: Array<Item>,
  onGet: () => void,
  onUserList: (order: number, page: number, limit: number) => void,
  onFollowList: (order: number, page: number, limit: number) => void,
  onLogout: () => void
}

export default class Page extends React.Component {
  componentWillMount() {
    this.props.onGet()
    this.props.onUserList(1, 1, 100)
    this.props.onFollowList(1, 1, 100)
  }

  props: Props

  render() {
    const { name, imageID, userList, followList, onLogout } = this.props

    return (
      <Frame
        name={name}
        imageID={imageID}
        avatarURL={iconURL(imageID)}
        userList={userList || []}
        followList={followList || []}
        onLogout={onLogout}
      />
    )
  }
}
