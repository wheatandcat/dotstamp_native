// @flow
import { connect } from "react-redux"
import Page from "../../../components/MyPage/User"
import { User } from "../../modules/User/User"
import { Items as UserItems } from "../../modules/User/Contribution"
import { Items as FollowItems } from "../../modules/Follow/Contribution"
import { fetchGetsIfNeeded } from "../../../libs/fetch"

const mapStateToProps = (state: any) => ({
  item: state.ContributionShow.item
})

const mapDispatchToProps = (dispatch: Function) => ({
  onGet: () => {
    dispatch(fetchGetsIfNeeded("me")).then(({ res }) => {
      dispatch(User(res.user.name, res.user.profileImageID))
    })
  },
  onUserList: () => {
    dispatch(fetchGetsIfNeeded("users/contribution/list")).then(({ res }) => {
      dispatch(UserItems(res.list, res.const))
    })
  },
  onFollowList: () => {
    dispatch(fetchGetsIfNeeded("follows/list")).then(({ res }) => {
      dispatch(FollowItems(res.list, res.const))
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
