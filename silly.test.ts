import { sillyFunction } from "./silly"
describe("silly function", () => {
  test("returns true", () => {
    expect(sillyFunction()).toEqual(true)
  })
})