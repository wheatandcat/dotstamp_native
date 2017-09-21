// @flow
import { WebBrowser } from "expo"
import { Linking, StyleSheet } from "react-native"
import { compose, withState, lifecycle, type HOC } from "recompose"
import queryString from "query-string"
import type { Err } from "../Auth/type"
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

type BaseProps = {
  email: string,
  password: string,
  error: Err,
  setEmail: (email: string) => void,
  changePassword: (password: string) => void,
  onCrate: (email: string, password: string) => void
}

const Redirect = async (setEmail, event) => {
  WebBrowser.dismissBrowser()
  const { access_token: accessToken } = queryString.parse(
    queryString.extract(event.url)
  )

  const response = await fetch(
    `https://graph.facebook.com/me?access_token=${accessToken}&fields=email`
  )
  const result = await response.json()

  await setEmail(result.email)
}

const Signin = async setEmail => {
  Linking.addEventListener("url", event => Redirect(setEmail, event))
  const result = await WebBrowser.openBrowserAsync(FacebookAuthURI)

  Linking.removeEventListener("url", event => Redirect(setEmail, event))
}

const enhance: HOC<State, Props> = compose(
  withState("email", "setEmail", ""),
  lifecycle({
    componentWillMount() {
      Signin(this.props.setEmail)
    }
  })
)

const EnhancedComponent = enhance(Auth)
export default EnhancedComponent
