// @flow
import { connect } from "react-redux"
import Page from "../../../components/Contribution/Search"
import { ChangeSearch, Items } from "../../modules/Contribution/Search"
import type { State } from "../../modules/Contribution/Search"
import { fetchPostsIfNeeded } from "../../../libs/fetch"

const mapStateToProps = (state: State) => ({
  list: state.ContributionSearch.list,
  search: state.ContributionSearch.search
})

const mapDispatchToProps = (dispatch: Function) => ({
  changeSearch: (text: string) => {
    dispatch(ChangeSearch(text))
  },
  onSearch: (search: string) => {
    dispatch(
      fetchPostsIfNeeded("contributions/search", {
        search,
        order: 1,
        page: 1,
        limit: 10
      })
    ).then(({ res }) => {
      dispatch(Items(res.list, res.count))
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
