// @flow
import "react-native"
import React from "react"
import renderer from "react-test-renderer"
import { Text } from "./"

it("renders without crashing", () => {
  const rendered = renderer.create(<Text label="foo" />).toJSON()
  expect(rendered).toBeTruthy()
})
