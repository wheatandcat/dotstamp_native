import React from "react"
import { StyleSheet } from "react-native"
import { Actions } from "react-native-router-flux"
import {
  Container,
  Header,
  Content,
  Left,
  Body,
  Right,
  Button,
  Title,
  Text,
  View
} from "native-base"
import { Select } from "./"

type Props = {
  itemId: number,
  value: number,
  onSelectClick: (value: number) => void,
  onSubmitClick: (itemId: number, value: number) => void
}

const styles = StyleSheet.create({
  cancel: {
    fontSize: 13
  },
  textZone: {
    padding: 10,
    paddingLeft: 20,
    paddingTop: 20
  },
  text: {
    color: "#777",
    fontSize: 20
  },
  input: {
    padding: 10,
    backgroundColor: "#FFF"
  },
  submit: {
    padding: 30
  }
})

export default ({ itemId, value, onSelectClick, onSubmitClick }: Props) => (
  <Container>
    <Header>
      <Left />
      <Body>
        <Title>投稿を通報する</Title>
      </Body>
      <Right>
        <Button transparent onPress={() => Actions.pop()}>
          <Text style={styles.cancel}>キャンセル</Text>
        </Button>
      </Right>
    </Header>
    <Content>
      <View style={styles.textZone}>
        <Text style={styles.text}>以下の理由で通報します。</Text>
      </View>
      <View style={styles.input}>
        <Select value={value} onClick={onSelectClick} />
      </View>
      <View style={styles.submit}>
        <Button full success onPress={() => onSubmitClick(itemId, value)}>
          <Text>送信する</Text>
        </Button>
      </View>
    </Content>
  </Container>
)
