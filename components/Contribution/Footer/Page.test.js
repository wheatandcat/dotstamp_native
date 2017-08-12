// @flow
import React from "react"
import renderer from "react-test-renderer"
import Page from "./"

it("renders without crashing", () => {
  const rendered = renderer.create(<Page selected="list" />).toJSON()
  expect(rendered).toBeTruthy()
})
