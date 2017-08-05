// @flow
import { dateTimeFormat, dateFormat } from "./date"

describe("date", () => {
  describe("dateFormat", () => {
    it("整形した日を取得する", () => {
      const result = dateFormat("2012-01-01")

      expect(result).toEqual("2012/01/01")
    })
  })

  describe("dateTimeFormat", () => {
    it("整形した日時を取得する", () => {
      const result = dateTimeFormat("2012-01-01 10:00")

      expect(result).toEqual("2012年01月01日 10:00:00")
    })
  })
})
