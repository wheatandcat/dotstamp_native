// @flow
import { connect } from "react-redux"
import { Actions } from "react-native-router-flux"
import Page from "../../../components/Contribution/Problem"
import { ProblemType } from "../../modules/Contribution/Problem"
import { fetchPostsIfNeeded } from "../../../libs/fetch"

const mapStateToProps = ({ ContributionShow, ContributionProblem }: any) => ({
  itemId: ContributionShow.item.id,
  problemType: ContributionProblem.problemType
})

const mapDispatchToProps = (dispatch: Function) => ({
  onSelectClick: (problemType: number) => dispatch(ProblemType(problemType)),
  onSubmitClick: (itemId: number, problemType: number) => {
    Actions.pop()
    return dispatch(
      fetchPostsIfNeeded("contributions/problem", {
        id: itemId,
        type: problemType
      })
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
