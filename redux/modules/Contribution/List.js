// @flow
import { handleActions } from "redux-actions"
import type { Item } from "../../../components/Contribution/List/Page"

// actions
export type Action = {
  type: string,
  payload?: {
    list: Array<Item>
  }
}

export type ActionAsync = (dispatch: Function, getState: Function) => void

export const Items = (list: Array<*>): Action => ({
  type: "CONTRBUTION/GET",
  payload: {
    list
  }
})

// reducer
export type State = {
  list: Array<Item>
}

const initialState: State = {
  list: []
}

export const reducer = handleActions(
  {
    "CONTRBUTION/GET": (state: State, action) => ({
      ...state,
      list: action.payload.list
    })
  },
  initialState
)
