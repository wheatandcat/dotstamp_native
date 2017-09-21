// @flow
import { handleActions } from "redux-actions"
import type { Err } from "../../../components/Login/type"

// actions
export type Action = {
  type: string,
  payload?: {
    password: string,
    error: Err
  }
}

export const ChangePassword = (password: string): any => ({
  type: "USER/NEW/CHANGE_PASSWORD",
  payload: {
    password
  }
})

export const ErrorData = (message: string): any => ({
  type: "USER/NEW/ERROR",
  payload: {
    error: {
      message
    }
  }
})

// reducers
export type State = {
  password: string,
  error: Err
}

const initialState: State = {
  password: "",
  error: {
    message: ""
  }
}

export const reducer = handleActions(
  {
    "USER/NEW/CHANGE_PASSWORD": (state: State, action) => ({
      ...state,
      password: action.payload.password
    }),
    "USER/NEW/ERROR": (state: State, action) => ({
      ...state,
      error: action.payload.error
    })
  },
  initialState
)
