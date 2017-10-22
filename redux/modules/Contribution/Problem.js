// @flow
import { handleActions } from "redux-actions"

// actions
export type Action = {
  type: string,
  payload?: {
    problemType: number
  }
}

export const ProblemType = (problemType: number): Action => ({
  type: "CONTRBUTION/PROBLEM_TYPE",
  payload: {
    problemType
  }
})

// reducers
export type State = {
  problemType: number
}

const initialState: State = {
  problemType: 1
}

export const reducer = handleActions(
  {
    "CONTRBUTION/PROBLEM_TYPE": (state: State, action) => ({
      ...state,
      problemType: action.payload.problemType
    })
  },
  initialState
)
