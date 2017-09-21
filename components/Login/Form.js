// @flow
import React from "react"
import { StyleSheet } from "react-native"
import { Form, Item, Input, Label, Button, Text, View } from "native-base"
import type { Err } from "./type"

type Props = {
  email: string,
  password: string,
  error: Err,
  changeEmail: (email: string) => void,
  changePassword: (password: string) => void,
  onLogin: (email: string, password: string) => void
}

const styles = StyleSheet.create({
  foget: {
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 15
  },
  fogetText: {
    fontSize: 12,
    color: "#3388BD"
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
  <Form>
    <Item floatingLabel error={error.message !== ""}>
      <Label>メールアドレス</Label>
      <Input value={email} onChangeText={changeEmail} />
    </Item>
    <Item floatingLabel error={error.message !== ""}>
      <Label>パスワード</Label>
      <Input value={password} onChangeText={changePassword} secureTextEntry />
    </Item>
    <View style={styles.foget}>
      <Text style={styles.fogetText}>パスワードを忘れた場合</Text>
    </View>
    <Button onPress={() => onLogin(email, password)} block success>
      <Text>ログイン</Text>
    </Button>
  </Form>
)
