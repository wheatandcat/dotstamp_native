// @flow
import { connect } from "react-redux"
import { Actions } from "react-native-router-flux"
import Page from "../../../components/Facebook/Login"
import {
  ChangePassword,
  ChangeEmail,
  ErrorData,
  type State
} from "../../modules/User/New"
import { Login } from "../../modules/Login/Authorization"
import { fetchPostsIfNeeded } from "../../../libs/fetch"

const mapStateToProps = (state: State) => ({
  password: state.UserNew.password,
  login: state.Login.login,
  error: state.Login.error
})

const mapDispatchToProps = (dispatch: Function) => ({
  changeEmail: (email: string) => dispatch(ChangeEmail(email)),
  changePassword: (password: string) => {
    dispatch(ChangePassword(password))
  },
  onLogin: (login: boolean) => {
    Actions["ユーザ"]()
    return dispatch(Login(login))
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
