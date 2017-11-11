// @flow
import React from "react"
import { WebView } from "react-native"

type Props = {
  videoID: string
}

export default ({ videoID }: Props) => (
  <WebView
    style={{ flex: 1 }}
    javaScriptEnabled
    source={{
      uri: `https://www.youtube.com/embed/${videoID}`
    }}
  />
)
