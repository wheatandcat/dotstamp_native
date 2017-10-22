import React, { Component } from "react"
import {
  Container,
  Header,
  Content,
  ListItem,
  Text,
  Radio,
  Right
} from "native-base"

export default class RadioButtonExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListItem>
            <Text>Daily Stand Up</Text>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Text>Discussion with Client</Text>
            <Right>
              <Radio selected />
            </Right>
          </ListItem>
        </Content>
      </Container>
    )
  }
}
