// @flow
import React from "react"
import { Image, StyleSheet } from "react-native"
import { Container, Content, H1, Text, View } from "native-base"
import Divider from "../Divider/"
import type { Err } from "./type"
import { Platform, Form } from "./"

type Props = {
  email: string,
  password: string,
  error: Err,
  changeEmail: (email: string) => void,
  changePassword: (password: string) => void,
  onLogin: (email: string, password: string) => void
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
  onLogin
}: Props) => (
  <Container>
    <Content style={styles.content} padder>
      <H1 style={styles.title}>ログイン</H1>
      <Divider />
      <Platform />
      <Divider />
      <Text style={styles.new}>メールアドレスを入力して登録する場合は、こちら</Text>

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
        onLogin={onLogin}
      />
      <Divider />
      <Image
        style={styles.log}
        source={{ uri: "https://dotstamp.com/static/images/common/top.png" }}
      />
    </Content>
  </Container>
)
