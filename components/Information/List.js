// @flow
import { WebBrowser } from "expo"
import React from "react"
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right
} from "native-base"
import { compose, withState, type HOC } from "recompose"
import { Terms } from "./"

type State = {
  open: boolean,
  setOpenTerms: (open: boolean) => void
}

type Props = {}

const enhance: HOC<State, Props> = compose(
  withState("open", "setOpenTerms", false)
)

const Plain = ({ open, setOpenTerms }: State) => (
  <Container>
    <Content>
      <List>
        <ListItem itemDivider />
        <ListItem
          icon
          onPress={() =>
            WebBrowser.openBrowserAsync(
              "https://github.com/wheatandcat/dotstamp_native"
            )}
        >
          <Left>
            <Icon name="logo-github" />
          </Left>
          <Body>
            <Text>GITHUB</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem
          icon
          onPress={() => WebBrowser.openBrowserAsync("https://dotstamp.com/")}
        >
          <Left>
            <Icon name="md-browsers" />
          </Left>
          <Body>
            <Text>ブラウザ版</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem itemDivider />
        <ListItem icon onPress={() => setOpenTerms(true)}>
          <Left />
          <Body>
            <Text>利用規約</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
      </List>
      <Terms open={open} onSetOpen={setOpenTerms} />
    </Content>
  </Container>
)

const EnhancedComponent = enhance(Plain)
export default EnhancedComponent
