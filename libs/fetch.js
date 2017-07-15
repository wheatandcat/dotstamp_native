// @flow
/* eslint-disable import/prefer-default-export */
const host: string = ""
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
 * @param  {any} res レスポンス
 * @return {object} アクション
 */
function receiveResponse(url: string, res: any): Object {
  fetchStateList[url].isFetching = false

  return {
    type: "GET",
    res,
    receivedAt: Date.now()
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

function fetchGets(url: string) {
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

        return dispatch(receiveResponse(url, json))
      })
}

/**
 * 必要な場合は通信しテキストを取得する
 *
 * @param  {string} url URL
 * @return {object} アクション
 */
export function fetchGetsIfNeeded(url: string): Object {
  return dispatch => {
    if (shouldFetchPosts(url)) {
      return dispatch(fetchGets(url))
    }

    return Promise.resolve()
  }
}
