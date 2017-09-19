// @flow
import React from "react"
import { StyleSheet } from "react-native"
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base"

type Props = {
  name: string,
  avatarURL: string,
  title: string,
  createdAt: string,
  followCount: number,
  following: boolean
}

const styles = StyleSheet.create({
  user: {
    backgroundColor: "#f5f5f5"
  },
  body: {
    backgroundColor: "#f5f5f5"
  },
  menu: {
    backgroundColor: "#f5f5f5"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    alignItems: "center",
    textAlign: "left",
    left: 20
  }
})

export default ({
  name,
  avatarURL,
  title,
  createdAt,
  followCount,
  following
}: Props) => (
  <Card>
    <CardItem style={styles.user}>
      <Left>
        <Thumbnail square source={{ uri: avatarURL }} />
        <Body>
          <Text>{name}</Text>
          <Text note>{createdAt}に投稿しました</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem cardBody style={styles.body}>
      <Text style={styles.title}>{title}</Text>
    </CardItem>
    <CardItem style={styles.menu}>
      <Left>
        {(() => {
          if (following) {
            return (
              <Button small success>
                <Text>フォローする</Text>
              </Button>
            )
          }

          return (
            <Button small success>
              <Text>フォロー済み</Text>
            </Button>
          )
        })()}
      </Left>
      <Right>
        <Button transparent>
          <Icon active name="thumbs-up" />
          <Text>&nbsp;&nbsp;{followCount}</Text>
        </Button>
      </Right>
    </CardItem>
  </Card>
)
