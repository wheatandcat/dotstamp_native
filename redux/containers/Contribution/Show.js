// @flow
import { connect } from "react-redux"
import Page from "../../../components/Contribution/Show"
import { Contribution } from "../../modules/Contribution/Show"
import {
  fetchGetsIfNeeded,
  fetchPostsIfNeeded,
  fetchDeleteIfNeeded
} from "../../../libs/fetch"

const mapStateToProps = (state: any) => ({
  item: state.ContributionShow.item,
  login: state.Login.login
})

const mapDispatchToProps = (dispatch: Function) => ({
  onGet: (id: number) => {
    dispatch(fetchGetsIfNeeded(`contributions/${id}`)).then(({ res }) => {
      dispatch(Contribution(res))
    })
  },
  onFollow: (id: number) => {
    dispatch(fetchPostsIfNeeded(`follows/${id}`)).then(() => {
      dispatch(fetchGetsIfNeeded(`contributions/${id}`)).then(({ res }) => {
        dispatch(Contribution(res))
      })
    })
  },
  onRemoveFollow: (id: number) => {
    dispatch(fetchDeleteIfNeeded(`follows/${id}`)).then(() => {
      dispatch(fetchGetsIfNeeded(`contributions/${id}`)).then(({ res }) =>
        dispatch(Contribution(res))
      )
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
