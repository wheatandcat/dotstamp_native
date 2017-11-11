// @flow
import React from "react"
import { Card } from "native-base"
import { charaURL } from "../../../libs/image"
import type { Body } from "../type"
import Balloon from "../Balloon"

type Props = {
  body: Array<Body>
}

export default ({ body }: Props) => (
  <Card>
    {body.map(item => (
      <Balloon
        key={item.priority}
        label={item.body}
        talkType={item.talkType}
        iconURL={charaURL(item.character.fileName)}
      />
    ))}
  </Card>
)
