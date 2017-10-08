// @flow
import React from "react"
import { Thumbnail } from "native-base"
import { View, StyleSheet } from "react-native"

type Props = {
  imageURL: string
}

const styles = StyleSheet.create({
  balloon: {
    borderWidth: 1,
    borderColor: "#cccccc",
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    borderRadius: 5,
    width: "75%",
    flex: 0,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  thumbnail: {
    maxWidth: 125,
    minHeight: 100,
    maxHeight: 150
  }
})

export default ({ imageURL }: Props) => (
  <View style={styles.balloon}>
    <Thumbnail
      square
      large
      source={{ uri: imageURL }}
      style={styles.thumbnail}
    />
  </View>
)
