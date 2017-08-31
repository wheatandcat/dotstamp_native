// @flow
import React from "react"
import { StyleSheet } from "react-native"
import { Card, CardItem, Thumbnail, Left, Body, H2 } from "native-base"
import Divider from "../Divider"

type Props = {
  name: string,
  avatarURL: string
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

export default ({ name, avatarURL }: Props) =>
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
      </Body>
    </CardItem>
  </Card>
