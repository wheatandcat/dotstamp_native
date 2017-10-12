import React, { Component } from "react"
import { View, Button, Text, Icon, H2 } from "native-base"
import Modal from "react-native-modalbox"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  form: {
    top: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "center"
  },
  content: {
    backgroundColor: "#ebeef0",
    flex: 1,
    alignItems: "center"
  },
  title: {
    bottom: 30
  },
  modal: {
    width: 300,
    paddingTop: 100,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

type Props = {
  onLogout: () => void
}

export default class Logout extends Component {
  state = {
    open: false
  }
  onLogout() {
    this.props.onLogout()
    this.close()
  }
  props: Props

  open() {
    this.setState({
      open: true
    })
  }

  close() {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <View>
        <Button
          iconLeft
          danger
          small
          onPress={() => this.open()}
          onClosed={this.close}
        >
          <Icon name="log-out" />
          <Text>ログアウト</Text>
        </Button>

        <Modal
          style={{ height: 300 }}
          ref={this.modalRef}
          isOpen={this.state.open}
          backdropPressToClose={false}
          position="center"
          coverScreen
        >
          <View style={styles.content}>
            <View style={styles.modal}>
              <H2 style={styles.title}>ログアウト</H2>
              <Text>本当にログアウトしますか？</Text>

              <View style={styles.form}>
                <Button
                  bordered
                  dark
                  small
                  style={{ right: 10 }}
                  onPress={() => this.close()}
                >
                  <Text>キャンセル</Text>
                </Button>
                <Button bordered danger small onPress={() => this.onLogout()}>
                  <Text>OK</Text>
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}
