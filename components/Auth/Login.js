// @flow
import React from "react"
import { StyleSheet } from "react-native"
import { Form, Item, Input, Label, Button, Text, View, H3 } from "native-base"

type Props = {
  email: string,
  password: string,
  changePassword: (password: string) => void,
  onLogin: (email: string, password: string) => void
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
  }
})

export default ({ email, password, changePassword, onLogin }: Props) => (
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
    <Button onPress={() => onLogin(email, password)} block success>
      <Text>ログインする</Text>
    </Button>
  </Form>
)
