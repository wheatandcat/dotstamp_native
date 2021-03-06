// @flow
import React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Body, Text, Thumbnail, ListItem } from "native-base"
import { Col, Row, Grid } from "react-native-easy-grid"
import { Actions } from "react-native-router-flux"
import { dateFormat } from "../../../libs/date"
import { iconURL } from "../../../libs/image"
import type { Item } from "./../type"
import Tags from "../Tag/"
import { MatchText } from "./"

type Props = Item & {
  match: string
}

const styles = StyleSheet.create({
  body: {
    height: 110
  },
  matchText: {
    top: 15
  },
  tags: { top: 10 },
  user: {
    fontSize: 12
  },
  thumbnail: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#00BFFF"
  },
  heder: {
    bottom: 5
  },
  date: {
    fontSize: 9,
    color: "grey"
  }
})

export default ({ id, user, title, tags, createdAt, search, match }: Props) => (
  <ListItem>
    <Body style={match !== "" ? { height: 110 } : { height: 70 }}>
      <Grid>
        <Row style={styles.heder}>
          <Col size={1} style={styles.thumbnail}>
            <Thumbnail
              square
              source={{ uri: iconURL(String(user.profileImageID)) }}
            />
          </Col>

          <Col size={3}>
            <Row>
              <Col>
                <Text
                  style={styles.user}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                >
                  {user.name}さん
                </Text>
              </Col>
              <Col>
                <Text style={styles.date}>投稿:{dateFormat(createdAt)}</Text>
              </Col>
            </Row>

            <Row>
              <Col>
                <TouchableOpacity
                  onPress={() => Actions.ContributionShow({ id })}
                >
                  <Text style={styles.title}>{title}</Text>
                </TouchableOpacity>
              </Col>
            </Row>
            {(() => {
              if (match !== "") {
                return (
                  <Row style={styles.matchText}>
                    <Col>
                      <TouchableOpacity
                        onPress={() => Actions.ContributionShow({ id })}
                      >
                        <MatchText text={search} match={match} />
                      </TouchableOpacity>
                    </Col>
                  </Row>
                )
              }

              return <View />
            })()}
            <Row style={styles.tags}>
              <Col>
                <Tags tags={tags} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Body>
  </ListItem>
)
