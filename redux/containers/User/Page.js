// @flow
import { connect } from "react-redux"
import Page from "../../../components/MyPage/Page"
import { User } from "../../modules/User/User"
import { Items as UserItems } from "../../modules/User/Contribution"
import { Items as FollowItems } from "../../modules/Follow/Contribution"
import { Login } from "../../modules/Login/Authorization"
import { fetchGetsIfNeeded, fetchPostsIfNeeded } from "../../../libs/fetch"

const mapStateToProps = (state: any) => ({
  name: state.User.name,
  imageID: state.User.imageID,
  userList: state.UserContribution.list,
  followList: state.FollowContribution.list
})

const mapDispatchToProps = (dispatch: Function) => ({
  onGet: () => {
    dispatch(fetchGetsIfNeeded("me")).then(({ res }) => {
      dispatch(User(res.user.name, res.user.profileImageID))
    })
  },
  onUserList: (order: number, page: numbetr, limit: number) => {
    dispatch(
      fetchPostsIfNeeded("users/contribution/list", {
        order,
        page,
        limit
      })
    ).then(({ res }) => {
      dispatch(UserItems(res.list, res.count))
    })
  },
  onFollowList: (order: number, page: numbetr, limit: number) => {
    dispatch(
      fetchPostsIfNeeded("follows/list", {
        order,
        page,
        limit
      })
    ).then(({ res }) => {
      dispatch(FollowItems(res.list, res.count))
    })
  },
  onLogout: () => {
    dispatch(fetchPostsIfNeeded("logout", {})).then(() => {
      dispatch(Login(false))
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
