// @flow
import { connect } from "react-redux"
import { Actions } from "react-native-router-flux"
import Page from "../../../components/New"
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
  login: state.Login.login,
  error: state.Login.error
})

const mapDispatchToProps = (dispatch: Function) => ({
  changeEmail: (email: string) => {
    dispatch(ChangeEmail(email))
  },
  changePassword: (password: string) => {
    dispatch(ChangePassword(password))
  },
  onCrate: (email: string, password: string) => {
    dispatch(
      fetchPostsIfNeeded("users/new", {
        email,
        password
      })
    ).then(({ res }) => {
      if (res.errCode === undefined) {
        return dispatch(Login(true)).then(() => {
          Actions["ユーザ"]()
        })
      }
      return dispatch(ErrorData(res.message))
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
