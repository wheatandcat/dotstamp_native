// @flow
/* eslint-disable import/prefer-default-export */
import fetch from "isomorphic-fetch"

const host: string = "http://dotstamp.com/"
const fetchStateList: Object = {}

/**
 * 通信するか判定する
 *
 * @param  {string} url URL
 * @return {bool} 通信フラグ
 */
function shouldFetchPosts(url: string): boolean {
  if (fetchStateList[url] === undefined) {
    fetchStateList[url] = {
      isFetching: false
    }
  }

  if (!fetchStateList[url].isFetching) {
    return true
  }

  return false
}

/**
 * レスポンスを返す
 *
 * @param  {string} url URL
 * @param  {string} type タイプ
 * @param  {object} response レスポンス
 * @param  {object} receiveParam 返しパラメータ
 * @return {object} アクション
 */
function receiveResponse(
  url: string,
  type: string,
  response: Object,
  receiveParam = {}
): Object {
  fetchStateList[url].isFetching = false

  return {
    type,
    url,
    response,
    receivedAt: Date.now(),
    receiveParam
  }
}

/**
 * エラーレスポンスを返す
 *
 * @param  {string} url URL
 * @param  {object} response レスポンス
 * @return {object} アクション
 */
function receiveErrorResponse(url: string, response: Object) {
  fetchStateList[url].isFetching = false

  return {
    type: "ERROR",
    message: response.Message,
    errCode: response.ErrCode,
    show: true,
    receivedAt: Date.now()
  }
}

function fetchGets(url: string, type: string, receiveParam: Object) {
  const requestParams = {
    method: "GET",
    credentials: "same-origin",
    headers: {
      "Content-Type": "pplication/json"
    }
  }

  return dispatch =>
    fetch(host + url, requestParams)
      .then(response =>
        response.json().then(json => ({
          status: response.status,
          json
        }))
      )
      .then(({ status, json }) => {
        if (status >= 400) {
          return dispatch(receiveErrorResponse(url, json))
        }

        return dispatch(receiveResponse(url, type, json, receiveParam))
      })
}

/**
 * 必要な場合は通信しテキストを取得する
 *
 * @param  {string} url URL
 * @param  {string} type タイプ
 * @param  {object} receiveParam 返しパラメータ
 * @return {object} アクション
 */
export function fetchGetsIfNeeded(
  url: string,
  type: string,
  receiveParam: Object
): Object {
  return dispatch => {
    if (shouldFetchPosts(url)) {
      // thunkからthunkを呼び出せる！
      return dispatch(fetchGets(url, type, receiveParam))
    }
    // 下記コードを呼び、wait forには何もないことを知らせる
    return Promise.resolve()
  }
}
