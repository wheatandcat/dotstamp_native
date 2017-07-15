// @flow
import { connect } from "react-redux"
import { PageA } from "../../../components/Contribution/List"
import { Items } from "../../modules/Contribution/List"
import type { State } from "../../modules/Contribution/List"

const mapStateToProps = (state: State) => ({
  list: state.list
})

const mapDispatchToProps = (dispatch: Function) => ({
  list: (list: Array<*>) => dispatch(Items(list))
})

export default connect(mapStateToProps, mapDispatchToProps)(PageA)
