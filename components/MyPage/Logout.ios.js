// @flow
import React, { Component } from "react"
import { View, Button, ActionSheet, Text, Icon } from "native-base"

type Props = {
  onLogout: () => void
}

const BUTTONS = ["ログアウト", "キャンセル"]

export default class Logout extends Component {
  constructor(props: any) {
    super(props)
    // $FlowFixMe
    this.actionSheet = null
  }

  props: Props

  showActionSheet() {
    const { onLogout } = this.props

    if (this.actionSheet !== null) {
      /* eslint-disable no-underscore-dangle */
      // $FlowFixMe
      this.actionSheet._root.showActionSheet(
        {
          options: BUTTONS
        },
        buttonIndex => {
          if (buttonIndex === 0) onLogout()
        }
      )
    }
  }

  render() {
    return (
      <View>
        <Button iconLeft danger small onPress={() => this.showActionSheet()}>
          <Icon name="log-out" />
          <Text>ログアウト</Text>
        </Button>
        <ActionSheet
          ref={c => {
            // $FlowFixMe
            this.actionSheet = c
          }}
        />
      </View>
    )
  }
}
