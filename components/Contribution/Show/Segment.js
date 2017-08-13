import React from "react"
import { Segment, Button, Text } from "native-base"
import { Actions } from "react-native-router-flux"

type Props = {
  id: number,
  selected: string
}

type Item = {
  name: string,
  icon: string,
  action: any
}

const items: Array<Item> = [
  {
    name: "記事",
    icon: "list",
    action: (id: number) => Actions.ContributionShow({ id })
  },
  {
    name: "動画",
    icon: "youtube",
    action: (id: number) => Actions.ContributionYoutube({ id })
  }
]

function menu(item: Item, id: number, selected: boolean) {
  if (selected) {
    return (
      <Button active key={item.icon}>
        <Text>
          {item.name}
        </Text>
      </Button>
    )
  }

  return (
    <Button onPress={() => item.action(id)} key={item.icon}>
      <Text>
        {item.name}
      </Text>
    </Button>
  )
}

export default ({ id, selected }: Props) =>
  <Segment>
    {items.map(item => menu(item, id, item.icon === selected))}
  </Segment>
