// @flow
import React from "react"
import { StyleSheet } from "react-native"
import { Container, Content } from "native-base"
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
    <Content style={styles.content} padder>
      <Form
        email={email}
        password={password}
        error={error}
        changePassword={changePassword}
        onCrate={onCrate}
      />
    </Content>
  </Container>
)
