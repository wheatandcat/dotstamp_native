// @flow
import React from "react"
import { StyleSheet } from "react-native"
import { Form, Item, Input, Label, Button, Text, View, H3 } from "native-base"
import type { Err } from "./type"

type Props = {
  email: string,
  password: string,
  error: Err,
  changePassword: (password: string) => void,
  onCrate: (email: string, password: string) => void
}

const styles = StyleSheet.create({
  email: {
    flex: 0,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  emailText: {
    color: "#F08080"
  },
  button: {
    top: 30
  }
})

/* eslint-disable no-unused-vars,no-undef */
export default ({ email, password, error, changePassword, onCrate }: Props) => (
  <Form>
    <View style={styles.email}>
      <H3>メールアドレス</H3>
    </View>
    <View style={styles.email}>
      <H3 style={styles.emailText}>{email}</H3>
    </View>
    <Item floatingLabel>
      <Label>パスワード</Label>
      <Input value={password} onChangeText={changePassword} secureTextEntry />
    </Item>
    <Button
      onPress={() => onCrate(email, password)}
      block
      success
      style={styles.button}
    >
      <Text>登録する</Text>
    </Button>
  </Form>
)
