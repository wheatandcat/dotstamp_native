// @flow
import { connect } from "react-redux"
import Page from "../../../components/Login"
import {
  ChangeEmail,
  ChangePassword,
  Login,
  ErrorData
} from "../../modules/Login/Authorization"
import type { State } from "../../modules/Login/Authorization"
import { fetchPostsIfNeeded } from "../../../libs/fetch"

const mapStateToProps = (state: State) => ({
  email: state.Login.email,
  password: state.Login.password,
  error: state.Login.error
})

const mapDispatchToProps = (dispatch: Function) => ({
  changeEmail: (email: string) => {
    dispatch(ChangeEmail(email))
  },
  changePassword: (password: string) => {
    dispatch(ChangePassword(password))
  },
  onLogin: (email: string, password: string) => {
    dispatch(
      fetchPostsIfNeeded("login/check", {
        email,
        password
      })
    ).then(({ res }) => {
      if (res.errCode === undefined) {
        return dispatch(Login(res))
      }
      return dispatch(ErrorData(res.message))
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)