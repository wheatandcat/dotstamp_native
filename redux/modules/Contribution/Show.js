// @flow
import { handleActions } from "redux-actions"
import type { ItemDetail } from "../../../components/Contribution/type"

// actions
export type Action = {
  type: string,
  payload?: {
    ...ItemDetail
  }
}

export type ActionAsync = (dispatch: Function, getState: Function) => void

export const Contribution = (item: ItemDetail): Action => ({
  type: "CONTRBUTION/GET",
  payload: {
    item
  }
})

// reducer
export type State = {
  item: ItemDetail
}

const initialState: State = {
  item: {
    id: 0,
    user: {
      name: "",
      profileImageID: 0
    },
    title: "",
    tags: [],
    body: [],
    viewStatus: 0,
    search: "",
    soundStatus: 0,
    updatedAt: "",
    createdAt: "",
    followCount: 0,
    following: false,
    soundFile: false,
    movie: {
      movie_id: ""
    }
  },
  counter: 0
}

export const reducer = handleActions(
  {
    "CONTRBUTION/GET": (state: State, action) => ({
      ...state,
      item: action.payload.item
    })
  },
  initialState
)
