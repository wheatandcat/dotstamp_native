import React from "react"
import styled from "styled-components/native"
import { Actions } from "react-native-router-flux"
import {
  Container,
  Header,
  Content,
  Left,
  Body,
  Right,
  Button,
  Title,
  Text,
  View
} from "native-base"
import { Select } from "./"

type Props = {
  itemId: number,
  value: number,
  sent: boolean,
  onReset: () => void,
  onSelectClick: (value: number) => void,
  onSubmitClick: (itemId: number, value: number) => void
}

const Sent = styled.View`
  background-color: #f4f4f4;
  padding-top: 20;
  padding-left: 20;
  padding-bottom: 10;
`

const SentText = styled.Text`
  color: #f44;
  font-size: 20;
`

const AboutZone = styled.View`
  padding-top: 20;
  padding-left: 20;
  padding-bottom: 10;
`

const About = styled.Text`
  color: #777;
  font-size: 20;
`

const Form = styled.View`
  padding-top: 10;
  padding-left: 10;
  padding-right: 10;
  padding-bottom: 10;
  backgroundcolor: "#FFF";
`

const Submit = styled.View`
  padding-top: 30;
  padding-left: 30;
  padding-right: 30;
  padding-bottom: 30;
`

export default ({
  itemId,
  value,
  sent,
  onReset,
  onSelectClick,
  onSubmitClick
}: Props) => (
  <Container>
    <Header>
      <Left />
      <Body>
        <Title>投稿を通報する</Title>
      </Body>
      <Right>
        <Button
          transparent
          onPress={() => {
            onReset()
            Actions.pop()
          }}
        >
          <Text style={{ fontSize: 13 }}>キャンセル</Text>
        </Button>
      </Right>
    </Header>
    <Content>
      {(() => {
        if (sent) {
          return (
            <Sent>
              <SentText>通報を送信しました。</SentText>
              <SentText>ご協力ありがとうございます。</SentText>
              <Button
                transparent
                full
                onPress={() => {
                  onReset()
                  Actions.pop()
                }}
              >
                <Text>記事に戻る</Text>
              </Button>
            </Sent>
          )
        }

        return <View />
      })()}
      <AboutZone>
        <About>以下の理由で通報します。</About>
      </AboutZone>
      <Form>
        <Select value={value} onClick={onSelectClick} />
      </Form>
      <Submit>
        <Button
          disabled={sent}
          full
          success={!sent}
          onPress={() => onSubmitClick(itemId, value)}
        >
          <Text>送信する</Text>
        </Button>
      </Submit>
    </Content>
  </Container>
)
