// @flow
import React from "react"
import styled from "styled-components/native"
import { ScrollView } from "react-native"
import {
  Container,
  Header,
  Content,
  Icon,
  Left,
  Right,
  Button,
  Title,
  Body
} from "native-base"
import Modal from "react-native-modalbox"

type Props = {
  open: boolean,
  onSetOpen: (open: boolean) => void
}

const Root = styled.View`
  padding-top: 10;
  padding-left: 10;
  padding-right: 10;
  padding-bottom: 200;
`

const Description = styled.Text`
  padding-top: 10;
  padding-bottom: 15;
`
const SubTitle = styled.Text`
  font-size: 16;
  fontweight: "bold";
`

export default ({ open, onSetOpen }: Props) => (
  <Modal
    style={{ height: 1000 }}
    isOpen={open}
    animationType="slide"
    swipeToClose={false}
    swipeArea={0}
  >
    <Container>
      <Header style={{ height: 40, backgroundColor: "#ddd" }}>
        <Left />
        <Body>
          <Title>利用規約</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => onSetOpen(false)}>
            <Icon name="close" />
          </Button>
        </Right>
      </Header>
      <Content>
        <ScrollView style={{ height: 500 }}>
          <Root>
            <SubTitle>利用規約</SubTitle>
            <Description>アプリ上で提供するサービスの利用条件を定めるものです。</Description>
            <SubTitle>第1条（利用規約）</SubTitle>
            <Description>本サービスは個人が運営するサイトです。節度ある、ご利用をお願いします。</Description>
            <SubTitle>第2条（禁止事項）</SubTitle>
            <Description>
              不正行為が確認できた場合は、ユーザー削除 or アクセス禁止処置を行うことがあるので、予めご了承ください。
            </Description>
            <SubTitle>第3条（記事の削除）</SubTitle>
            <Description>
              通報された記事や不適切内容の記事を場合は、運営の独断で削除する場合があるので、予めご了承ください。
            </Description>
            <SubTitle>第4条(ユーザーの責任)</SubTitle>
            <Description>
              サービスにおいてユーザーが投稿した記事、内容、または不利益について、一切関与せず責任は負いません
            </Description>
            <SubTitle>第5条(本サービスの変更・廃止)</SubTitle>
            <Description>
              本サービスを、最低10日間の予告期間をおいて停止または廃止することができます。
              また、廃止に伴うユーザーの不利益は一切保証しないものとします
            </Description>
          </Root>
        </ScrollView>
      </Content>
    </Container>
  </Modal>
)
