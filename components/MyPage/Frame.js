// @flow
import React from "react"
import {
  Root,
  Container,
  Content,
  List,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text
} from "native-base"
import type { Item } from "../Contribution/type"
import Page from "../Contribution/Thumbnail"
import Divider from "../Divider"
import { User } from "./"

type Props = {
  name: string,
  avatarURL: string,
  userList: Array<Item>,
  followList: Array<Item>,
  onLogout: () => void
}

export default ({ name, avatarURL, userList, followList, onLogout }: Props) => (
  <Root>
    <Container>
      <Content padder>
        <User name={name} avatarURL={avatarURL} onLogout={onLogout} />

        <Divider />
        <Tabs>
          <Tab
            heading={
              <TabHeading>
                <Icon name="list" />
                <Text>My投稿</Text>
              </TabHeading>
            }
          >
            <List style={{ backgroundColor: "rgb(255, 255, 255)" }}>
              {userList.map(item => <Page key={item.id} {...item} match="" />)}
            </List>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon name="thumbs-up" active />
                <Text>フォロー記事</Text>
              </TabHeading>
            }
          >
            <List style={{ backgroundColor: "rgb(255, 255, 255)" }}>
              {followList.map(item => (
                <Page key={item.id} {...item} match="" />
              ))}
            </List>
          </Tab>
        </Tabs>
      </Content>
    </Container>
  </Root>
)
