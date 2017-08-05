// @flow
import dateFormatBase from "dateformat"

/**
 * 整形した日を取得する
 *
 * @param  {string} data 日付
 * @return {string} 日付
 */
export function dateFormat(date: string): string {
  return dateFormatBase(date, "yyyy/mm/dd")
}

/**
 * 整形した日時を取得する
 *
 * @param  {string} data 日付
 * @return {string} 日付
 */
export function dateTimeFormat(date: string): string {
  return dateFormatBase(date, "yyyy年mm月dd日 hh:MM:ss")
}
