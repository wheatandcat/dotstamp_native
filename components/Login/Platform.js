// @flow
import React from "react"
import { StyleSheet } from "react-native"
import { Actions } from "react-native-router-flux"
import { Button, Icon, Text, View } from "native-base"

const styles = StyleSheet.create({
  form: {},
  google: {
    margin: 5,
    backgroundColor: "#D9534F"
  },
  twitter: {
    margin: 5,
    backgroundColor: "#5BC0DE"
  },
  facebook: {
    margin: 5,
    backgroundColor: "#337AB7"
  }
})

export default () =>
  <View style={styles.form}>
    <Button
      iconLeft
      block
      style={styles.google}
      onPress={() => Actions.Google()}
    >
      <Icon name="logo-google" />
      <Text>Googleでログイン</Text>
    </Button>
    <Button iconLeft block style={styles.twitter}>
      <Icon name="logo-twitter" />
      <Text>Twitterでログイン</Text>
    </Button>
    <Button iconLeft block style={styles.facebook}>
      <Icon name="logo-facebook" />
      <Text>Facebookでログイン</Text>
    </Button>
  </View>
