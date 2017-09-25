// @flow
import React from "react"
import { Image, StyleSheet } from "react-native"
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Left,
  Right,
  H1,
  Text,
  View,
  Button,
  Icon
} from "native-base"
import { Actions } from "react-native-router-flux"
import Footer from "../Contribution/Footer"
import Divider from "../Divider/"
import type { Err } from "./type"
import { Platform, Form } from "./"

type Props = {
  email: string,
  password: string,
  error: Err,
  changeEmail: (email: string) => void,
  changePassword: (password: string) => void,
  onCreate: (email: string, password: string) => void
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#FFF"
  },
  log: {
    width: 115,
    height: 38
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10
  },
  new: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 12,
    color: "#3388BD"
  },
  alert: {
    margin: 10,
    padding: 10,
    backgroundColor: "#F2DEDE",
    borderColor: "#EBCCD1",
    borderRadius: 10
  },
  alertText: {
    fontSize: 12,
    color: "#A94442"
  }
})

export default ({
  email,
  password,
  error,
  changeEmail,
  changePassword,
  onCreate
}: Props) => (
  <Container>
    <Header>
      <Left>
        <Button
          transparent
          iconLeft
          onPress={() => Actions["ユーザ"]({ order: 0 })}
        >
          <Icon name="arrow-back" />
          <Text>Back</Text>
        </Button>
      </Left>
      <Body>
        <Title>{"新規登録"}</Title>
      </Body>
      <Right />
    </Header>
    <Content style={styles.content} padder>
      <H1 style={styles.title}>新規登録</H1>
      <Divider />
      <Platform />
      <Divider />
      <Text style={styles.new} onPress={() => Actions["ユーザ"]({ order: 0 })}>
        既にアカウントを持っている場合は、ログインから
      </Text>

      {(() => {
        if (error.message !== "") {
          return (
            <View style={styles.alert}>
              <Text style={styles.alertText}>{error.message}</Text>
            </View>
          )
        }
        return <View />
      })()}
      <Form
        email={email}
        password={password}
        error={error}
        changeEmail={changeEmail}
        changePassword={changePassword}
        onCreate={onCreate}
      />
      <Divider />
      <Image
        style={styles.log}
        source={{ uri: "https://dotstamp.com/static/images/common/top.png" }}
      />
    </Content>
    <Footer selected="person" />
  </Container>
)
