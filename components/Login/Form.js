// @flow
import React from "react"
import { StyleSheet } from "react-native"
import { Form, Item, Input, Label, Button, Text, View } from "native-base"

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

export default () =>
  <Form>
    <Item floatingLabel>
      <Label>メールアドレス</Label>
      <Input />
    </Item>
    <Item floatingLabel>
      <Label>パスワード</Label>
      <Input />
    </Item>
    <View style={styles.foget}>
      <Text style={styles.fogetText}>パスワードを忘れた場合</Text>
    </View>
    <Button block success>
      <Text>ログイン</Text>
    </Button>
  </Form>
