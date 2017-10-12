// @flow
import React from "react"
import { StyleSheet, Platform } from "react-native"
import { Card, CardItem, Thumbnail, Left, Body, H3 } from "native-base"
import Divider from "../Divider"
import { LogoutIos, LogoutAndroid } from "./"

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

const Logout = Platform.OS === "android" ? LogoutAndroid : LogoutIos

export default ({ name, avatarURL, onLogout }: Props) => (
  <Card>
    <CardItem style={styles.user}>
      <Left tyle={styles.left}>
        <Thumbnail square source={{ uri: avatarURL }} />
      </Left>
      <Body style={styles.name}>
        <H3>{name}</H3>
        <Divider />
        <Logout onLogout={onLogout} />
      </Body>
    </CardItem>
  </Card>
)
