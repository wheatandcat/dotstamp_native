// @flow
import React from "react"
import { WebView } from "react-native"

export default () =>
  <WebView
    style={{ flex: 1 }}
    javaScriptEnabled
    source={{
      uri: "https://dotstamp.com/api/twitter/oauth/"
    }}
  />
