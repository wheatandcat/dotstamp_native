// @flow
export type User = {
  id: number,
  name: string,
  profileImageID: number
}

export type Tag = {
  id: number,
  name: string
}

export type Movie = {
  movie_type: number,
  movie_id: string,
  movie_status: number
}

export type Body = {
  priority: number,
  body: string,
  directionType: number,
  talkType: number,
  character: {
    id: number,
    fileName: string,
    voiceType: number
  }
}

export type Item = {
  id: number,
  user: User,
  title: string,
  tags: Array<Tag>,
  followCount: number,
  viewStatus: number,
  search: string,
  body: Array<Body>,
  movie: Movie,
  createdAt: string,
  updatedAt: string
}

export type ItemDetail = {
  ...Item,
  following: boolean,
  soundFile: boolean
}
