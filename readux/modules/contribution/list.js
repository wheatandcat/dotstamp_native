// @flow
import { handleActions } from "redux-actions"

// actions
export type Action = {
  type: string,
  payload?: {
    list: Array<*>
  }


export type ActionAsync = (dispatch: Function, getState: Function) => void

export const list = (list: Array<*>): Action => {
  return {
    type: "CONTRBUTION/LIST",
    payload: {
      list,
    },
  }
}

// reducer
type List = {
  list: Array<*>
}

const initialState: List = {
  list: Array<*>
}

export const reducer = handleActions(
  {
    [ADD_NEW_COUNTER]: (state: CounterState, action) => {
      const { idGen } = state
      const newId = idGen + 1

      //this reducer basically generate a new id for new counter and
      //assign value 0 to that id.

      return {
        idGen: newId,
        counters: {
          ...state.counters,
          [newId]: 0,
        },
      }
    },
  },
  initialState
)
