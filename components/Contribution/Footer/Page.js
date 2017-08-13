// @flow
import React from "react"
import { Footer, FooterTab, Button, Icon, Text } from "native-base"
import { Actions } from "react-native-router-flux"

type Props = {
  selected: string
}

type Item = {
  name: string,
  icon: string,
  action: any
}

const items: Array<Item> = [
  {
    name: "投稿",
    icon: "list",
    action: () => Actions.ContributionList({ order: 0 })
  },
  {
    name: "検索",
    icon: "search",
    action: () => Actions.ContributionList({ order: 0 })
  },
  {
    name: "ユーザ",
    icon: "person",
    action: () => Actions.ContributionList({ order: 0 })
  }
]

function menu(item: Item, selected: boolean) {
  if (selected) {
    return (
      <Button active key={item.icon}>
        <Icon active name={item.icon} />
        <Text>
          {item.name}
        </Text>
      </Button>
    )
  }

  return (
    <Button onPress={item.action} key={item.icon}>
      <Icon name={item.icon} />
      <Text>
        {item.name}
      </Text>
    </Button>
  )
}

export default ({ selected }: Props) =>
  <Footer>
    <FooterTab>
      {items.map(item => menu(item, item.icon === selected))}
    </FooterTab>
  </Footer>
