// @flow
import { WebBrowser } from "expo"
import { Linking, StyleSheet } from "react-native"
import { compose, withState, lifecycle, type HOC } from "recompose"
import queryString from "query-string"
import Auth from "../Auth"

const AppID = "1696288387368219"

/* eslint-disable no-unused-vars,no-undef */
const RedirectURI = "https://dotstamp.com/static/html/dev_auth.html"

// "https://dotstamp.com/static/html/auth.html"

const FacebookAuthURI = `https://www.facebook.com/v2.8/dialog/oauth?response_type=token&client_id=${AppID}&redirect_uri=${RedirectURI}`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  info: {
    color: "#eee"
  }
})

type State = {
  url: string,
  accessToken: string,
  email: string
}

type Props = {
  email: string,
  setEmail: (email: string) => void,
  changeEmail: (email: string) => void,
  onLogin: (login: boolean) => void
}

const Redirect = async (setEmail, onLogin, changeEmail, event) => {
  await WebBrowser.dismissBrowser()
  const result = await queryString.parse(queryString.extract(event.url))

  if (result.login) {
    await onLogin(result.login)
    return
  }

  await setEmail(result.email)
}

const Signin = async (setEmail, onLogin, changeEmail) => {
  Linking.addEventListener("url", event =>
    Redirect(setEmail, onLogin, changeEmail, event)
  )
  const result = await WebBrowser.openBrowserAsync(FacebookAuthURI)

  Linking.removeEventListener("url", event =>
    Redirect(setEmail, onLogin, changeEmail, event)
  )
}

const enhance: HOC<State, Props> = compose(
  withState("email", "setEmail", ""),
  lifecycle({
    componentWillMount() {
      Signin(this.props.setEmail, this.props.onLogin, this.props.changeEmail)
    }
  })
)

const EnhancedComponent = enhance(Auth)
export default EnhancedComponent
