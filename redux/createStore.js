// @flow

import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { reducer as ContributionList } from "./modules/Contribution/List"
import { reducer as ContributionShow } from "./modules/Contribution/Show"

const middleware = applyMiddleware(thunk)

export default () => {
  const rootReducer = combineReducers({
    // every modules reducer should be define here
    ContributionList,
    ContributionShow
  })

  return createStore(rootReducer, middleware)
}
