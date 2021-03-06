// @flow
import React from "react"
import { StyleSheet } from "react-native"
import { Container, Content, Button, Text, Icon } from "native-base"
import { Actions } from "react-native-router-flux"
import type { Err } from "./type"
import { Login, Create } from "./"

type Props = {
  email: string,
  password: string,
  error: Err,
  login: boolean,
  changePassword: (password: string) => void,
  onCrate: (email: string, password: string) => void,
  onLogin: (email: string, password: string) => void
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#FFF"
  }
})

export default ({
  email,
  password,
  login,
  error,
  changePassword,
  onLogin,
  onCrate
}: Props) => (
  <Container>
    <Button transparent iconLeft onPress={() => Actions["ユーザ"]({ order: 0 })}>
      <Icon name="arrow-back" />
      <Text>Back</Text>
    </Button>
    <Content style={styles.content} padder>
      {(() => {
        if (!login) {
          return (
            <Create
              email={email}
              password={password}
              error={error}
              changePassword={changePassword}
              onCrate={onCrate}
            />
          )
        }

        return (
          <Login
            email={email}
            password={password}
            error={error}
            changePassword={changePassword}
            onLogin={onLogin}
          />
        )
      })()}
    </Content>
  </Container>
)
