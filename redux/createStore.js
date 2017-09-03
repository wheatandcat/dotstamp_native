// @flow

import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { reducer as ContributionList } from "./modules/Contribution/List"
import { reducer as ContributionShow } from "./modules/Contribution/Show"
import { reducer as ContributionSearch } from "./modules/Contribution/Search"
import { reducer as User } from "./modules/User/User"
import { reducer as UserContribution } from "./modules/User/Contribution"
import { reducer as FollowContribution } from "./modules/Follow/Contribution"
import { reducer as Login } from "./modules/Login/Authorization"

const middleware = applyMiddleware(thunk)

export default () => {
  const rootReducer = combineReducers({
    // every modules reducer should be define here
    ContributionList,
    ContributionShow,
    ContributionSearch,
    Login,
    User,
    UserContribution,
    FollowContribution
  })

  return createStore(rootReducer, middleware)
}
