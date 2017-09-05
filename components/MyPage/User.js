// @flow
import React from "react"
import { StyleSheet } from "react-native"
import { Card, CardItem, Thumbnail, Left, Body, H2 } from "native-base"
import Divider from "../Divider"
import { Logout } from "./"

type Props = {
  name: string,
  avatarURL: string,
  onLogout: () => void
}

const styles = StyleSheet.create({
  user: {
    backgroundColor: "#f5f5f5"
  },
  left: {
    width: 10
  },
  name: {
    right: 50
  }
})

export default ({ name, avatarURL, onLogout }: Props) =>
  <Card>
    <CardItem style={styles.user}>
      <Left tyle={styles.left}>
        <Thumbnail square source={{ uri: avatarURL }} />
      </Left>
      <Body style={styles.name}>
        <H2>
          {name}
        </H2>
        <Divider />
        <Logout onLogout={onLogout} />
      </Body>
    </CardItem>
  </Card>
