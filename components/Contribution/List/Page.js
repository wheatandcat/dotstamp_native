// @flow
import React from "react"
import { Frame } from "./"

type User = {
  id: number,
  name: string,
  profileImageID: number
}

type Tag = {
  id: number,
  name: string
}

type Movie = {
  movie_type: number,
  movie_id: string,
  movie_status: number
}

export type Item = {
  id: number,
  user: User,
  title: string,
  tags: Array<Tag>,
  followCount: number,
  viewStatus: number,
  search: string,
  movie: Movie,
  createdAt: string,
  updatedAt: string
}

type Props = {
  list: Array<Item>,
  onGet: (order: number) => void
}

export default class RatingCard extends React.Component {
  componentWillMount() {
    this.props.onGet(1)
  }

  props: Props

  render() {
    return <Frame list={this.props.list} />
  }
}
