// @flow
import { connect } from "react-redux"
import Page from "../../../components/Contribution/List"
import { Items } from "../../modules/Contribution/List"
import type { State } from "../../modules/Contribution/List"
import { fetchGetsIfNeeded } from "../../../libs/fetch"

const mapStateToProps = (state: State) => ({
  list: state.ContributionList.list
})

const mapDispatchToProps = (dispatch: Function) => ({
  onGet: (order: number) =>
    dispatch(
      fetchGetsIfNeeded(`contributions/list/${order}`)
    ).then(({ res }) => {
      dispatch(Items(res))
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
