// @flow
import { handleActions } from "redux-actions"

// actions
export type Action = {
  type: string,
  payload?: {
    problemType: number,
    sent: boolean
  }
}

export const Init = () => ({
  type: "CONTRBUTION/PROBLEM_INIT",
  payload: {
    problemType: 1,
    sent: false
  }
})

export const ProblemType = (problemType: number) => ({
  type: "CONTRBUTION/PROBLEM_TYPE",
  payload: {
    problemType
  }
})

export const Sent = (sent: boolean = true) => ({
  type: "CONTRBUTION/PROBLEM_SENT",
  payload: {
    sent
  }
})

// reducers
export type State = {
  problemType: number,
  sent: boolean
}

const initialState: State = {
  problemType: 1,
  sent: false
}

export const reducer = handleActions(
  {
    "CONTRBUTION/PROBLEM_TYPE": (state: State, action) => ({
      ...state,
      problemType: action.payload.problemType
    }),
    "CONTRBUTION/PROBLEM_SENT": (state: State, action) => ({
      ...state,
      sent: action.payload.sent
    }),
    "CONTRBUTION/PROBLEM_INIT": (state: State, action) => ({
      ...state,
      problemType: action.payload.problemType,
      sent: action.payload.sent
    })
  },
  initialState
)
