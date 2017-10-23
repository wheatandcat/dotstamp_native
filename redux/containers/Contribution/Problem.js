// @flow
import { connect } from "react-redux"
import Page from "../../../components/Contribution/Problem"
import { ProblemType, Sent, Init } from "../../modules/Contribution/Problem"
import { fetchPostsIfNeeded } from "../../../libs/fetch"

const mapStateToProps = ({ ContributionShow, ContributionProblem }: any) => ({
  itemId: ContributionShow.item.id,
  problemType: ContributionProblem.problemType,
  sent: ContributionProblem.sent
})

const mapDispatchToProps = (dispatch: Function) => ({
  onReset: () => dispatch(Init()),
  onSelectClick: (problemType: number) => dispatch(ProblemType(problemType)),
  onSubmitClick: (itemId: number, problemType: number) => {
    dispatch(
      fetchPostsIfNeeded("problem", {
        id: itemId,
        type: problemType
      })
    ).then(() => {
      dispatch(Sent(true))
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
