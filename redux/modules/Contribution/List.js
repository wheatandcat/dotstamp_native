// @flow
import { handleActions } from "redux-actions"

// actions
export type Action = {
  type: string,
  payload?: {
    list: Array<*>
  }
}

export type ActionAsync = (dispatch: Function, getState: Function) => void

export const Items = (list: Array<*>): Action => ({
  type: "CONTRBUTION/Items",
  payload: {
    list
  }
})

// reducer
export type State = {
  list: Array<*>
}

const initialState: State = {
  list: []
}

export const reducer = handleActions(
  {
    "CONTRBUTION/LIST": (state: State, action) => ({
      ...state,
      list: action.payload.list
    })
  },
  initialState
)
