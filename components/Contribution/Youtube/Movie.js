// @flow
import React from "react"
import YouTube from "react-native-youtube"
import { StyleSheet, PixelRatio, Dimensions, Platform } from "react-native"

type Props = {
  videoID: string
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  buttonGroup: {
    flexDirection: "row",
    alignSelf: "center"
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 18,
    color: "blue"
  },
  buttonTextSmall: {
    fontSize: 15
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  player: {
    height: PixelRatio.roundToNearestPixel(
      Dimensions.get("window").width / (16 / 9)
    ),
    alignSelf: "stretch",
    marginVertical: 10
  }
})

export default class Show extends React.Component {
  state = {
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: true,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false
  }
  props: Props
  render() {
    return (
      <YouTube
        // You must have an API Key for the player to load in Android
        apiKey="YOUR_API_KEY"
        // Un-comment one of videoId / videoIds / playlist.
        // You can also edit these props while Hot-Loading in development mode to see how
        // it affects the loaded native module
        videoId="KVZ-P-ZI6W4"
        // videoIds={['HcXNPI-IPPM', 'XXlZfc1TrD0', 'czcjU1w-c6k', 'uMK0prafzw0']}
        // playlistId="PLF797E961509B4EB5"
        play={this.state.isPlaying}
        loop={this.state.isLooping}
        fullscreen={this.state.fullscreen}
        controls={1}
        style={styles.player}
        onError={e => this.setState({ error: e.error })}
        onReady={() => this.setState({ isReady: true })}
        onChangeState={e => this.setState({ status: e.state })}
        onChangeQuality={e => this.setState({ quality: e.quality })}
        onChangeFullscreen={e => this.setState({ fullscreen: e.isFullscreen })}
        onProgress={
          Platform.OS === "ios"
            ? e =>
                this.setState({
                  duration: e.duration,
                  currentTime: e.currentTime
                })
            : undefined
        }
      />
    )
  }
}
