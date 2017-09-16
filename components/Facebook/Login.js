import { Constants, WebBrowser } from "expo"
import React from "react"
import { Linking, StyleSheet } from "react-native"
import { Container, Content, Button, Text, View } from "native-base"
import queryString from "query-string"
import Footer from "../Contribution/Footer"

const AppID = "1696288387368219"
const RedirectURI = "https://dotstamp.com/api/native/callback/"
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

export default class App extends React.Component {
  state = {
    url: "", // we will put the redirect url here
    accessToken: "", // we will put the token we extract from redirect url here
    result: {} // we will put data about the user here
  }

  render() {
    console.log("render")
    return (
      <Container>
        <Content padder>
          <Button onPress={this._handlePressSignIn}>
            <Text> Sign in with Facebook0</Text>
          </Button>
          {this._renderResult()}

          <Text style={styles.info}>
            sdkVersion: {Constants.manifest.sdkVersion}
          </Text>
        </Content>
        <Footer />
      </Container>
    )
  }

  _renderResult = () => {
    console.log(this.state)
    if (!this.state.url || !this.state.accessToken || !this.state.result) {
      return null
    }

    return (
      <View>
        <Text style={{ fontWeight: "bold" }}>Redirect received to:</Text>
        <Text numberOfLines={2}>
          {this.state.url}
        </Text>

        <Text style={{ fontWeight: "bold", marginTop: 15 }}>
          Extracted this token from the redirect url:
        </Text>
        <Text numberOfLines={2}>
          {this.state.accessToken}
        </Text>

        <Text style={{ fontWeight: "bold", marginTop: 15 }}>
          For the following user
        </Text>
        <Text numberOfLines={2}>
          {JSON.stringify(this.state.result)}
        </Text>
      </View>
    )
  }
  _handlePressSignIn = async () => {
    Linking.addEventListener("url", this._handleFacebookRedirect)
    console.log("_handlePressSignIn")
    console.log(FacebookAuthURI)
    const result = await WebBrowser.openBrowserAsync(FacebookAuthURI)
    console.log({ result })

    Linking.removeEventListener("url", this._handleFacebookRedirect)
  }

  _handleFacebookRedirect = async event => {
    console.log("handleFacebookRedirect")
    WebBrowser.dismissBrowser()

    console.log(event.url)
    const { access_token: accessToken } = queryString.parse(
      queryString.extract(event.url)
    )

    console.log(accessToken)

    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${accessToken}&fields=id,name,picture.type(large)`
    )
    const result = await response.json()
    console.log(result)
    this.setState({ accessToken, url: event.url, result })
  }
}
