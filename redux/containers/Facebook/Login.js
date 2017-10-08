// @flow
import { connect } from "react-redux"
import { Actions } from "react-native-router-flux"
import Page from "../../../components/Facebook/Login"
import { ChangePassword, ErrorData, type State } from "../../modules/User/New"
import { Login } from "../../modules/Login/Authorization"
import { fetchPostsIfNeeded, fetchGetsIfNeeded } from "../../../libs/fetch"

const mapStateToProps = (state: State) => ({
  password: state.UserNew.password,
  error: state.Login.error
})

const mapDispatchToProps = (dispatch: Function) => ({
  changePassword: (password: string) => {
    dispatch(ChangePassword(password))
  },
  onAuth: (
    accessToken: string,
    setEmail: (email: string) => void,
    setLogin: (login: boolean) => void
  ) => {
    dispatch(
      fetchGetsIfNeeded(`native/callback?access_token=${accessToken}`)
    ).then(({ res }) => {
      setEmail(res.email)
      setLogin(res.login)
      if (res.login) {
        Actions["ユーザ"]()
        return dispatch(Login(true))
      }

      return true
    })
  },
  onLogin: (email: string, password: string) => {
    dispatch(
      fetchPostsIfNeeded("login/check", {
        email,
        password
      })
    ).then(({ res }) => {
      if (res.errCode === undefined) {
        Actions["ユーザ"]()
        return dispatch(Login(true))
      }
      return dispatch(ErrorData(res.message))
    })
  },
  onCrate: (email: string, password: string) => {
    dispatch(
      fetchPostsIfNeeded("users/new", {
        email,
        password
      })
    ).then(({ res }) => {
      if (res.errCode === undefined) {
        Actions["ユーザ"]()
        return dispatch(Login(true))
      }
      return dispatch(ErrorData(res.message))
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
