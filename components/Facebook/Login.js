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
  email: string
}

const Redirect = async (setEmail, setLogin, event) => {
  await WebBrowser.dismissBrowser()
  const result = await queryString.parse(queryString.extract(event.url))

  await setLogin(result.login)
  await setEmail(result.email)
}

const Signin = async (setEmail, setLogin) => {
  Linking.addEventListener("url", event => Redirect(setEmail, setLogin, event))
  const result = await WebBrowser.openBrowserAsync(FacebookAuthURI)

  Linking.removeEventListener("url", event =>
    Redirect(setEmail, setLogin, event)
  )
}

const enhance: HOC<State, Props> = compose(
  withState("email", "setEmail", ""),
  withState("login", "setLogin", false),
  lifecycle({
    componentWillMount() {
      Signin(this.props.setEmail, this.props.setLogin)
    }
  })
)

const EnhancedComponent = enhance(Auth)
export default EnhancedComponent
