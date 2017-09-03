// @flow
import { handleActions } from "redux-actions"

// actions
export type Action = {
  type: string,
  payload?: {
    name: string,
    imageID: number
  }
}

export const User = (name: string, imageID: number): any => ({
  type: "USER",
  payload: {
    name,
    imageID
  }
})

// reducers
export type State = {
  name: string,
  imageID: number
}

const initialState: State = {
  name: "",
  imageID: 0
}

export const reducer = handleActions(
  {
    USER: (state: State, action) => ({
      ...state,
      name: action.payload.name,
      imageID: action.payload.imageID
    })
  },
  initialState
)
