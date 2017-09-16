// @flow
import { handleActions } from "redux-actions"
import type { Err } from "../../../components/Login/type"

// actions
export type Action = {
  type: string,
  payload?: {
    email: string,
    password: string,
    login: boolean,
    error: Err
  }
}

export const ChangeEmail = (email: string): any => ({
  type: "LOGIN/CHANGE_EMAIL",
  payload: {
    email
  }
})

export const ChangePassword = (password: string): any => ({
  type: "LOGIN/CHANGE_PASSWORD",
  payload: {
    password
  }
})

export const Login = (login: boolean): any => ({
  type: "LOGIN",
  payload: {
    login
  }
})

export const ErrorData = (message: string): any => ({
  type: "LOGIN/ERROR",
  payload: {
    error: {
      message
    }
  }
})

// reducers
export type State = {
  email: string,
  password: string,
  login: boolean,
  error: Err
}

const initialState: State = {
  email: "",
  password: "",
  login: false,
  error: {
    message: ""
  }
}

export const reducer = handleActions(
  {
    "LOGIN/CHANGE_EMAIL": (state: State, action) => ({
      ...state,
      email: action.payload.email
    }),
    "LOGIN/CHANGE_PASSWORD": (state: State, action) => ({
      ...state,
      password: action.payload.password
    }),
    LOGIN: (state: State, action) => ({
      ...state,
      login: action.payload.login
    }),
    "LOGIN/ERROR": (state: State, action) => ({
      ...state,
      error: action.payload.error
    })
  },
  initialState
)
