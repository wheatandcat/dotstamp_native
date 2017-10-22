import React from "react"
import { StyleSheet } from "react-native"
import { View } from "native-base"
import RadioForm from "react-native-simple-radio-button"

type Props = {
  value: number,
  onClick: (value: number) => void
}

const styles = StyleSheet.create({
  root: {
    padding: 0,
    margin: 0
  }
})

const SPAM = 1
const OTHER = 2

const radioProps = [
  {
    label: "スパムです　　　　　　　　　",
    value: SPAM
  },
  {
    label: "不適切な内容が含まれています",
    value: OTHER
  }
]

export default ({ value, onClick }: Props) => (
  <View style={styles.root}>
    <RadioForm
      radio_props={radioProps}
      initial={value}
      onPress={radioValue => onClick(radioValue)}
    />
  </View>
)
