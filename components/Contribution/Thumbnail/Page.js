// @flow
import React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { Body, Text, Icon, Right, Thumbnail, ListItem } from "native-base"
import { Col, Row, Grid } from "react-native-easy-grid"
import { Actions } from "react-native-router-flux"
import { dateFormat } from "../../../libs/date"
import type { Item } from "../List/Page"

const styles = StyleSheet.create({
  user: {
    fontSize: 12
  },
  title: {
    fontSize: 15,
    fontWeight: "bold"
  },
  heder: {
    bottom: 5
  },
  date: {
    fontSize: 9,
    color: "grey"
  }
})

export default ({ user, title, createdAt }: Item) =>
  <ListItem>
    <Thumbnail
      source={{ uri: "http://dotstamp.com/static/files/icon/1.jpg" }}
    />
    <Body>
      <Grid>
        <Row style={styles.heder}>
          <Col>
            <Text style={styles.user}>
              {user.name}さん
            </Text>
          </Col>
          <Col>
            <Text style={styles.date}>
              投稿:{dateFormat(createdAt)}
            </Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <TouchableOpacity
              onPress={() =>
                Actions.pageB({ param1: "hello", param2: "world" })}
            >
              <Text style={styles.title}>
                {title}
              </Text>
            </TouchableOpacity>
          </Col>
        </Row>
      </Grid>
    </Body>
    <Right>
      <TouchableOpacity onPress={Actions.pageB}>
        <Icon name="arrow-forward" />
      </TouchableOpacity>
    </Right>
  </ListItem>
