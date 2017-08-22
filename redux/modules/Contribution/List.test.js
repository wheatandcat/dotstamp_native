// @flow
import { Items, reducer } from "./List"

describe("edux/modules/Contribution/List", () => {
  describe("Items", () => {
    describe("CONTRBUTION/LIST", () => {
      const action = Items(
        [
          {
            id: 1,
            user: {
              id: 1,
              name: "foo",
              profileImageID: 1
            },
            title: "foo",
            tags: [
              {
                id: 1,
                name: "foo"
              }
            ],
            followCount: 1,
            viewStatus: 1,
            search: "foo",
            movie: {
              movie_type: 1,
              movie_id: "foobar",
              movie_status: 1
            },
            createdAt: "2017-04-24T22:45:00+09:00",
            updatedAt: "2017-04-24T22:45:00+09:00"
          }
        ],
        1
      )

      it("action", () => {
        expect(action).toEqual({
          type: "CONTRBUTION/LIST",
          payload: {
            list: [
              {
                id: 1,
                user: {
                  id: 1,
                  name: "foo",
                  profileImageID: 1
                },
                title: "foo",
                tags: [
                  {
                    id: 1,
                    name: "foo"
                  }
                ],
                followCount: 1,
                viewStatus: 1,
                search: "foo",
                movie: {
                  movie_type: 1,
                  movie_id: "foobar",
                  movie_status: 1
                },
                createdAt: "2017-04-24T22:45:00+09:00",
                updatedAt: "2017-04-24T22:45:00+09:00"
              }
            ],
            page: 1
          }
        })
      })

      it("reducer", () => {
        expect(reducer([], action)).toEqual({
          list: [
            {
              id: 1,
              user: {
                id: 1,
                name: "foo",
                profileImageID: 1
              },
              title: "foo",
              tags: [
                {
                  id: 1,
                  name: "foo"
                }
              ],
              followCount: 1,
              viewStatus: 1,
              search: "foo",
              movie: {
                movie_type: 1,
                movie_id: "foobar",
                movie_status: 1
              },
              createdAt: "2017-04-24T22:45:00+09:00",
              updatedAt: "2017-04-24T22:45:00+09:00"
            }
          ],
          page: 1
        })
      })
    })
  })
})
