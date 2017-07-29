import React from "react"
import { Footer, FooterTab, Button, Icon, Text } from "native-base"

export default () =>
  <Footer>
    <FooterTab>
      <Button>
        <Icon name="apps" />
        <Text>apps</Text>
      </Button>
      <Button>
        <Icon name="camera" />
        <Text>camera</Text>
      </Button>
      <Button active>
        <Icon active name="navigate" />
        <Text>foo</Text>
      </Button>
      <Button>
        <Icon name="person" />
        <Text>bar</Text>
      </Button>
    </FooterTab>
  </Footer>
