// @flow
import { connect } from "react-redux"
import Page from "../../../components/Contribution/List"
import { Items } from "../../modules/Contribution/List"
import { fetchGetsIfNeeded } from "../../../libs/fetch"

const mapStateToProps = (state: any) => ({
  page: state.ContributionList.page,
  list: state.ContributionList.list
})

const mapDispatchToProps = (dispatch: Function) => ({
  onGet: (order: number) =>
    dispatch(
      fetchGetsIfNeeded(`contributions/list/${order}`)
    ).then(({ res }) => {
      dispatch(Items(res, order))
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
