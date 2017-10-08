// @flow
/* eslint-disable import/prefer-default-export */
const host: string = "https://dotstamp.com/api/"
const fetchStateList: Object = {}

/**
 * 通信するか判定する
 */
function shouldFetch(url: string): boolean {
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
 */
function receiveResponse(type: string, url: string, res: any): Object {
  fetchStateList[url].isFetching = false

  return {
    type,
    res,
    receivedAt: Date.now()
  }
}

/**
 * エラーレスポンスを返す
 */
function receiveErrorResponse(url: string, res: any): Object {
  fetchStateList[url].isFetching = false

  return {
    type: "ERROR",
    message: res.message,
    errCode: res.errCode,
    show: true,
    receivedAt: Date.now()
  }
}

/**
 * [GET]responseを取得する
 */
function fetchGets(url: string) {
  const requestParams = {
    method: "GET",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
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
      .then(({ json }) => dispatch(receiveResponse("GET", url, json)))
      .catch(({ json }) => dispatch(receiveErrorResponse(url, json)))
}

/**
 * [GET]通信する
 */
export function fetchGetsIfNeeded(url: string): Object {
  return dispatch => {
    if (shouldFetch(url)) {
      return dispatch(fetchGets(url))
    }

    return Promise.resolve()
  }
}

/**
 * [POST]responseを取得する
 */
function fetchPosts(url: string, paramas: Object) {
  const requestParams = {
    method: "POST",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(paramas)
  }

  return dispatch =>
    fetch(host + url, requestParams)
      .then(response =>
        response.json().then(json => ({
          status: response.status,
          json
        }))
      )
      .then(({ json }) => dispatch(receiveResponse("POST", url, json)))
      .catch(({ json }) => dispatch(receiveErrorResponse(url, json)))
}

/**
 * [POST]通信する
 */
export function fetchPostsIfNeeded(url: string, paramas: Object = {}): Object {
  return dispatch => {
    if (shouldFetch(url)) {
      return dispatch(fetchPosts(url, paramas))
    }

    return Promise.resolve()
  }
}

/**
 * [DELETE]responseを取得する
 */
function fetchDelete(url: string, paramas: Object) {
  const requestParams = {
    method: "DELETE",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(paramas)
  }

  return dispatch =>
    fetch(host + url, requestParams)
      .then(response =>
        response.json().then(json => ({
          status: response.status,
          json
        }))
      )
      .then(({ json }) => dispatch(receiveResponse("DELETE", url, json)))
      .catch(({ json }) => dispatch(receiveErrorResponse(url, json)))
}

/**
 * [DELETE]通信する
 */
export function fetchDeleteIfNeeded(url: string, paramas: Object = {}): Object {
  return dispatch => {
    if (shouldFetch(url)) {
      return dispatch(fetchDelete(url, paramas))
    }

    return Promise.resolve()
  }
}
