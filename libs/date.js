// @flow
import dateFormat from "dateformat"

/**
 * 整形した日を取得する
 *
 * @param  {string} data 日付
 * @return {string} 日付
 */
export function DateFormat(date: string): string {
  return dateFormat(date, "yyyy/mm/dd")
}

/**
 * 整形した日時を取得する
 *
 * @param  {string} data 日付
 * @return {string} 日付
 */
export function DateTimeFormat(date: string): string {
  return dateFormat(date, "yyyy年mm月dd日 hh:MM:ss")
}
