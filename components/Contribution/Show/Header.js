// @flow
import React from "react"
import { StyleSheet } from "react-native"
import { Actions } from "react-native-router-flux"
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
import DropMenu from "../../DropMenu/DropMenu"

type Props = {
  id: number,
  name: string,
  avatarURL: string,
  title: string,
  createdAt: string,
  followCount: number,
  following: boolean,
  login: ?boolean,
  onFollow: (id: number) => void,
  onRemoveFollow: (id: number) => void
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
    fontWeight: "bold"
  }
})

export default ({
  id,
  name,
  login,
  avatarURL,
  title,
  createdAt,
  followCount,
  following,
  onFollow,
  onRemoveFollow
}: Props) => (
  <Card>
    <CardItem style={styles.user}>
      <Left>
        <Thumbnail square source={{ uri: avatarURL }} />
        <Body>
          <Text>{name}</Text>
          <Text note>{createdAt}に投稿しました</Text>
        </Body>
        <Right>
          <DropMenu
            buttonIcon="list"
            buttonLable=""
            buttonOption={{
              transparent: true
            }}
            label="この記事を通報する"
            onClick={Actions.ContributionProblem}
          />
        </Right>
      </Left>
    </CardItem>
    <CardItem style={styles.body}>
      <Body>
        <Text style={styles.title}>{title}</Text>
      </Body>
    </CardItem>
    <CardItem style={styles.menu}>
      <Left>
        {(() => {
          if (!login) {
            return (
              <Button small disabled>
                <Text>フォローする</Text>
              </Button>
            )
          }

          if (!following) {
            return (
              <Button small success onPress={() => onFollow(id)}>
                <Text>フォローする</Text>
              </Button>
            )
          }

          return (
            <Button small success onPress={() => onRemoveFollow(id)}>
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
