// @flow
import { handleActions } from "redux-actions"
import type { Item } from "../../../components/Contribution/type"

// actions
export type Action = {
  type: string,
  payload?: {
    page: number,
    list: Array<Item>
  }
}

export type ActionAsync = (dispatch: Function, getState: Function) => void

export const Items = (list: Array<Item>, page: number): Action => ({
  type: "USER/CONTRBUTION/LIST",
  payload: {
    page,
    list
  }
})

// reducers
export type State = {
  page: number,
  list: Array<Item>
}

const initialState: State = {
  page: 0,
  list: []
}

export const reducer = handleActions(
  {
    "USER/CONTRBUTION/LIST": (state: State, action) => ({
      ...state,
      list: action.payload.list,
      page: action.payload.page
    })
  },
  initialState
)
