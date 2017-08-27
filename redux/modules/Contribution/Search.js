// @flow
import { handleActions } from "redux-actions"
import type { Item } from "../../../components/Contribution/type"

// actions
export type Action = {
  type: string,
  payload?: {
    search: string,
    order: number,
    page: number,
    limit: number,
    list: Array<Item>,
    count: number
  }
}

export type ActionAsync = (dispatch: Function, getState: Function) => void

export const ChangeSearch = (search: string): any => ({
  type: "CONTRBUTION/CHANGE_SEARCH",
  payload: {
    search
  }
})

export const Items = (list: Array<Item>, count: number): any => ({
  type: "CONTRBUTION/SEARCH",
  payload: {
    list: list != null ? list : [],
    count
  }
})

// reducers
export type State = {
  search: string,
  order: number,
  page: number,
  limit: number,
  list: Array<Item>,
  count: number
}

const initialState: State = {
  search: "",
  order: 1,
  page: 1,
  limit: 1,
  list: [],
  count: 0
}

export const reducer = handleActions(
  {
    "CONTRBUTION/CHANGE_SEARCH": (state: State, action) => ({
      ...state,
      search: action.payload.search
    }),
    "CONTRBUTION/SEARCH": (state: State, action) => ({
      ...state,
      list: action.payload.list,
      count: action.payload.count
    })
  },
  initialState
)
