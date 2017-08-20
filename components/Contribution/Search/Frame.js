// @flow
import React from "react"
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Content,
  List
} from "native-base"
import type { Item as ItemType } from "./../type"
import Footer from "../Footer"
import Page from "../Thumbnail"
import { NoMatch } from "./"

type Props = {
  list: Array<ItemType>,
  search: string,
  changeSearch: (text: string) => void,
  onSearch: (text: string) => void
}

export default ({ list, search, changeSearch, onSearch }: Props) =>
  <Container>
    <Header searchBar rounded>
      <Item>
        <Icon name="search" />
        <Input
          placeholder="検索ワード"
          fixedLabel={false}
          onChangeText={text => changeSearch(text)}
          onEndEditing={() => onSearch(search)}
          value={search}
          returnKeyType="search"
        />
      </Item>
    </Header>
    <Content>
      {(() => {
        if (list.length === 0) {
          return <NoMatch />
        }

        return (
          <List style={{ backgroundColor: "rgb(255, 255, 255)" }}>
            {list.map(item =>
              <Page key={item.title} {...item} match={search} />
            )}
          </List>
        )
      })()}
    </Content>
    <Footer selected="search" />
  </Container>
