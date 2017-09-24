// @flow
import React from "react"
import { StyleSheet } from "react-native"
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Left,
  Right,
  Button,
  Text,
  Icon
} from "native-base"
import { Actions } from "react-native-router-flux"
import Footer from "../Contribution/Footer"
import type { Err } from "./type"
import { Form } from "./"

type Props = {
  email: string,
  password: string,
  error: Err,
  changePassword: (password: string) => void,
  onCrate: (email: string, password: string) => void
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#FFF"
  }
})

export default ({ email, password, error, changePassword, onCrate }: Props) => (
  <Container>
    <Header>
      <Left>
        <Button
          transparent
          iconLeft
          onPress={() => Actions["ユーザ"]({ order: 0 })}
        >
          <Icon name="arrow-back" />
          <Text>Back</Text>
        </Button>
      </Left>
      <Body>
        <Title>新規登録</Title>
      </Body>
      <Right />
    </Header>
    <Content style={styles.content} padder>
      <Form
        email={email}
        password={password}
        error={error}
        changePassword={changePassword}
        onCrate={onCrate}
      />
    </Content>
    <Footer selected="person" />
  </Container>
)
