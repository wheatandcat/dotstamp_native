// @flow
import { connect } from "react-redux"
import Page from "../../../components/Contribution/Youtube"
import { Contribution, type State } from "../../modules/Contribution/Show"
import { fetchGetsIfNeeded } from "../../../libs/fetch"

const mapStateToProps = (state: State) => ({
  item: state.ContributionShow.item
})

const mapDispatchToProps = (dispatch: Function) => ({
  onGet: (id: number) =>
    dispatch(fetchGetsIfNeeded(`contributions/${id}`)).then(({ res }) => {
      dispatch(Contribution(res))
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
