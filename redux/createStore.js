// @flow
import { AsyncStorage } from "react-native"
import { compose, createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import persistState from "redux-localstorage"
import adapter from "redux-localstorage/lib/adapters/AsyncStorage"
import filter from "redux-localstorage-filter"
import { reducer as ContributionList } from "./modules/Contribution/List"
import { reducer as ContributionShow } from "./modules/Contribution/Show"
import { reducer as ContributionSearch } from "./modules/Contribution/Search"
import { reducer as User } from "./modules/User/User"
import { reducer as UserNew } from "./modules/User/New"
import { reducer as UserContribution } from "./modules/User/Contribution"
import { reducer as FollowContribution } from "./modules/Follow/Contribution"
import { reducer as Login } from "./modules/Login/Authorization"

const middlewares = [thunk]

const storage = compose(filter(["Login"]))(adapter(AsyncStorage))

// $FlowFixMe
export default initialState => {
  const rootReducer = combineReducers({
    // every modules reducer should be define here
    ContributionList,
    ContributionShow,
    ContributionSearch,
    Login,
    User,
    UserNew,
    UserContribution,
    FollowContribution
  })

  const enhancer = compose(
    applyMiddleware(...middlewares),
    persistState(storage, "auth")
  )

  return createStore(rootReducer, initialState, enhancer)
}
