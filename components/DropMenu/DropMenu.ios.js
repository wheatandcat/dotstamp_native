// @flow
import React, { Component } from "react"
import { View, Button, ActionSheet, Text, Icon } from "native-base"

type Props = {
  buttonIcon: string,
  buttonLable: string,
  buttonOption: any,
  label: string,
  onClick: () => void
}

export default class DropMenu extends Component {
  constructor(props: any) {
    super(props)
    // $FlowFixMe
    this.actionSheet = null
  }

  props: Props

  showActionSheet() {
    const { onClick, label } = this.props

    if (this.actionSheet !== null) {
      /* eslint-disable no-underscore-dangle */
      // $FlowFixMe
      this.actionSheet._root.showActionSheet(
        {
          options: [label, "キャンセル"]
        },
        buttonIndex => {
          if (buttonIndex === 0) onClick()
        }
      )
    }
  }

  render() {
    const { buttonIcon, buttonLable, buttonOption } = this.props
    return (
      <View>
        <Button {...buttonOption} onPress={() => this.showActionSheet()}>
          <Icon name={buttonIcon} />
          <Text>{buttonLable}</Text>
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
