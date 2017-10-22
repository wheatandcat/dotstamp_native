// @flow
import { Platform } from "react-native"
import { DropMenuIos, DropMenuAndroid } from "./"

const DropMenu = Platform.OS === "android" ? DropMenuAndroid : DropMenuIos

export default DropMenu
