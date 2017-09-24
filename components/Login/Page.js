// @flow
import React from "react"
import User from "../../redux/containers/User/Page"
import type { Err } from "./type"
import { Frame } from "./"

type Props = {
  email: string,
  password: string,
  login: boolean,
  error: Err,
  changeEmail: (email: string) => void,
  changePassword: (password: string) => void,
  onLogin: (email: string, password: string) => void
}

export default ({
  email,
  password,
  login,
  error,
  changeEmail,
  changePassword,
  onLogin
}: Props) =>
  !login ? (
    <Frame
      email={email}
      password={password}
      error={error}
      changeEmail={changeEmail}
      changePassword={changePassword}
      onLogin={onLogin}
    />
  ) : (
    <User />
  )
