// @flow
import React from "react"
import { CardItem, Thumbnail } from "native-base"
import { talkURL } from "../../../libs/image"
import { TAKLK_TYPE_IMAGE } from "../constant"
import { Text, Image } from "./"

type Props = {
  label: string,
  talkType: number,
  iconURL: string
}

export default ({ label, iconURL, talkType }: Props) =>
  <CardItem>
    <Thumbnail square source={{ uri: iconURL }} />
    {(() => {
      if (talkType === TAKLK_TYPE_IMAGE) {
        return <Image imageURL={talkURL(label)} />
      }

      return <Text label={label} />
    })()}
  </CardItem>
