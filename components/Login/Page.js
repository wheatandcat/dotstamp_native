// @flow
import React from "react"
import { Image, StyleSheet } from "react-native"
import { Container, Content, H1, Text } from "native-base"
import Divider from "../Divider/"
import { Platform, Form } from "./"

const styles = StyleSheet.create({
  log: {
    width: 115,
    height: 38
  },
  title: {
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 10
  },
  new: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 12,
    color: "#3388BD"
  }
})

export default () =>
  <Container>
    <Content padder>
      <Image
        style={styles.log}
        source={{ uri: "https://dotstamp.com/static/images/common/top.png" }}
      />
      <H1 style={styles.title}>ログイン</H1>
      <Divider />
      <Platform />
      <Divider />
      <Text style={styles.new}>メールアドレスを入力して登録する場合は、こちら</Text>
      <Form />
    </Content>
  </Container>
