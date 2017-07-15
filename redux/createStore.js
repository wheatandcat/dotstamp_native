// @flow

import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { reducer as ContributionList } from "./modules/Contribution/List"

const middleware = applyMiddleware(thunk)

export default (data: Object = {}) => {
  const rootReducer = combineReducers({
    // every modules reducer should be define here
    ContributionList
  })

  return createStore(rootReducer, data, middleware)
}
