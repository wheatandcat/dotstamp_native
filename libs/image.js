// @flow
const host = "http://dotstamp.com/static/"

function imageURL(file: string): string {
  return host + file
}
export function iconURL(fileName: string): string {
  return imageURL(`files/icon/${fileName}.jpg`)
}

export function charaURL(fileName: string): string {
  return imageURL(`files/character/${fileName}`)
}

export function talkURL(fileName: string): string {
  return imageURL(`files/talk/${fileName}`)
}
