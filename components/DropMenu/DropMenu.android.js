import React, { Component } from "react"
import {
  View,
  Button,
  Text,
  Icon,
  H2,
  List,
  ListItem,
  Left,
  Right
} from "native-base"
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
  title: {
    bottom: 30
  }
})

type Props = {
  buttonIcon: string,
  buttonLable: string,
  buttonOption: any,
  label: string,
  onClick: () => void
}

export default class DropMenu extends Component {
  state = {
    open: false
  }
  onClick() {
    this.props.onClick()
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
    const { buttonIcon, buttonLable, buttonOption, label } = this.props

    return (
      <View>
        <Button
          {...buttonOption}
          onPress={() => this.open()}
          onClosed={this.close}
        >
          <Icon name={buttonIcon} />
          <Text>{buttonLable}</Text>
        </Button>

        <Modal
          style={{ height: "90%", padding: 10 }}
          ref={this.modalRef}
          isOpen={this.state.open}
          backdropPressToClose={false}
          coverScreen
        >
          <H2>項目</H2>
          <List>
            <ListItem onPress={() => this.onClick()}>
              <Left>
                <Text>{label}</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
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
          </View>
        </Modal>
      </View>
    )
  }
}
